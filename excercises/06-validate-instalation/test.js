describe("Checking Kali Linux vm", () => {
  var data
  var kaliMachine
  
  beforeAll(() => {
    let fs = require("fs")
    require('dotenv').config();
    if (fs.existsSync('vminfo.json')) {
      data = JSON.parse(fs.readFileSync('vminfo.json', 'utf8'));
    } else {
      throw new Error('vminfo.json not found. Please run the BAT file on your local machine.');
    }
    kaliMachine = data.find(vm => /^Windows 10*/.test(vm.ostype))
  });

  test('The windows machine must be created with Windows 10', async () => {
    expect(kaliMachine).toBeDefined();
  })
  test('The windows machine must have at least 4 GB of memory', async () => {
    expect(parseInt(kaliMachine.memory)).toBeGreaterThanOrEqual(4096);
  })
  test('The windows machine must have at least 2 cpus', async () => {
    expect(parseInt(kaliMachine.cpus)).toBeGreaterThanOrEqual(2);
  })
})