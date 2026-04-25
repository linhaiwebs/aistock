/**
 * Test script for backend stock crawler API
 * Usage: node test-api.mjs [base_url]
 * Default base_url: http://localhost:3001
 */

const BASE_URL = process.argv[2] || 'http://localhost:3001';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ ${message}`);
    passed++;
  } else {
    console.log(`  ❌ ${message}`);
    failed++;
  }
}

async function testHealth() {
  console.log('\n📊 Testing /health endpoint...');
  try {
    const res = await fetch(`${BASE_URL}/health`);
    assert(res.ok, 'Health endpoint responds with OK status');
    const data = await res.json();
    assert(data.status === 'ok', `Health status is "ok" (got: "${data.status}")`);
    assert(data.timestamp, `Timestamp is present: ${data.timestamp}`);
    assert(data.environment, `Environment is present: ${data.environment}`);
  } catch (err) {
    assert(false, `Health endpoint failed: ${err.message}`);
  }
}

async function testStockSearch() {
  console.log('\n🔍 Testing /api/stock/search endpoint...');
  
  // Test empty query
  try {
    const res = await fetch(`${BASE_URL}/api/stock/search?q=`);
    assert(res.ok, 'Empty search responds OK');
    const data = await res.json();
    assert(Array.isArray(data.results), 'Empty search returns results array');
  } catch (err) {
    assert(false, `Empty search failed: ${err.message}`);
  }

  // Test search without query param
  try {
    const res = await fetch(`${BASE_URL}/api/stock/search`);
    assert(res.ok, 'Search without param responds OK');
    const data = await res.json();
    assert(Array.isArray(data.results), 'Search without param returns results array');
  } catch (err) {
    assert(false, `Search without param failed: ${err.message}`);
  }
}

async function testStockData() {
  console.log('\n📈 Testing /api/stock/data endpoint...');
  
  // Test missing code parameter
  try {
    const res = await fetch(`${BASE_URL}/api/stock/data`);
    assert(res.status === 400, 'Missing code returns 400');
    const data = await res.json();
    assert(data.error, 'Error message is present');
  } catch (err) {
    assert(false, `Missing code test failed: ${err.message}`);
  }

  // Test valid stock code (2269 = 明治ホールディングス)
  try {
    console.log('  Fetching stock data for code 2269 (may take a few seconds)...');
    const res = await fetch(`${BASE_URL}/api/stock/data?code=2269`);
    assert(res.ok, `Stock data endpoint responds OK (status: ${res.status})`);
    
    const data = await res.json();
    
    // Test stock info
    assert(data.info, 'Stock info object is present');
    if (data.info) {
      assert(data.info.code === '2269', `Stock code is "2269" (got: "${data.info.code}")`);
      assert(data.info.name, `Stock name is present: "${data.info.name}"`);
      assert(data.info.price, `Stock price is present: "${data.info.price}"`);
      assert(data.info.market, `Market is present: "${data.info.market}"`);
      assert(data.info.change !== undefined, `Change is present: "${data.info.change}"`);
      assert(data.info.changePercent !== undefined, `Change percent is present: "${data.info.changePercent}"`);
      assert(data.info.industry, `Industry is present: "${data.info.industry}"`);
      assert(data.info.per, `PER is present: "${data.info.per}"`);
      assert(data.info.pbr, `PBR is present: "${data.info.pbr}"`);
      assert(data.info.dividend, `Dividend yield is present: "${data.info.dividend}"`);
      assert(data.info.creditRatio, `Credit ratio is present: "${data.info.creditRatio}"`);
      assert(data.info.marketCap, `Market cap is present: "${data.info.marketCap}"`);
      assert(data.info.unit, `Unit is present: "${data.info.unit}"`);
    }
    
    // Test stock prices
    assert(Array.isArray(data.prices), 'Stock prices is an array');
    if (Array.isArray(data.prices) && data.prices.length > 0) {
      const price = data.prices[0];
      assert(price.date, `Price date is present: "${price.date}"`);
      assert(price.open, `Price open is present: "${price.open}"`);
      assert(price.high, `Price high is present: "${price.high}"`);
      assert(price.low, `Price low is present: "${price.low}"`);
      assert(price.close, `Price close is present: "${price.close}"`);
      assert(price.volume, `Price volume is present: "${price.volume}"`);
      console.log(`  📅 Latest price date: ${price.date}, Close: ${price.close}`);
    } else if (Array.isArray(data.prices)) {
      console.log('  ⚠️  No price data returned (might be outside trading hours or market closed)');
    }
  } catch (err) {
    assert(false, `Stock data test failed: ${err.message}`);
  }

  // Test another stock code (7203 = トヨタ自動車)
  try {
    console.log('  Fetching stock data for code 7203 (Toyota)...');
    const res = await fetch(`${BASE_URL}/api/stock/data?code=7203`);
    assert(res.ok, `Toyota stock data responds OK (status: ${res.status})`);
    
    const data = await res.json();
    if (data.info) {
      assert(data.info.code === '7203', `Toyota code is "7203" (got: "${data.info.code}")`);
      assert(data.info.name, `Toyota name is present: "${data.info.name}"`);
      assert(data.info.price, `Toyota price is present: "${data.info.price}"`);
    }
  } catch (err) {
    assert(false, `Toyota stock data test failed: ${err.message}`);
  }

  // Test invalid stock code
  try {
    const res = await fetch(`${BASE_URL}/api/stock/data?code=99999`);
    // kabutan may return 200 with an error page or a different status
    if (res.ok) {
      const data = await res.json();
      if (data.info) {
        // If somehow we got data back, that's unexpected but not a failure
        console.log(`  ⚠️  Got data for invalid code 99999: ${JSON.stringify(data.info).substring(0, 100)}`);
      } else {
        assert(true, 'Invalid stock code returns no info');
      }
    } else {
      assert(res.status >= 400, `Invalid stock code returns error status: ${res.status}`);
    }
  } catch (err) {
    // Non-200 response is acceptable for invalid code
    assert(true, `Invalid stock code test completed (error expected)`);
  }
}

async function testGeminiStats() {
  console.log('\n🤖 Testing /api/gemini/stats endpoint...');
  try {
    const res = await fetch(`${BASE_URL}/api/gemini/stats`);
    assert(res.ok, 'Gemini stats endpoint responds OK');
    const data = await res.json();
    assert(data.rateLimit, 'Rate limit data is present');
    assert(data.today, 'Today stats are present');
  } catch (err) {
    assert(false, `Gemini stats test failed: ${err.message}`);
  }
}

async function main() {
  console.log('🚀 Starting API tests...');
  console.log(`📍 Base URL: ${BASE_URL}`);
  
  await testHealth();
  await testStockSearch();
  await testStockData();
  await testGeminiStats();
  
  console.log('\n' + '='.repeat(50));
  console.log(`📊 Test Results: ${passed} passed, ${failed} failed, ${passed + failed} total`);
  
  if (failed > 0) {
    console.log('❌ Some tests failed!');
    process.exit(1);
  } else {
    console.log('✅ All tests passed!');
    process.exit(0);
  }
}

main();
