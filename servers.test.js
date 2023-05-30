describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  afterEach(function() {
    serverNameInput.value = '';
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
  });
  
  it('should update the server table', function () {
    allServers = {
      server1: { serverName: 'Server 1' },
      server2: { serverName: 'Server 2' }
    };

    updateServerTable();

    const rows = serverTbody.querySelectorAll('tr');
    expect(rows.length).toEqual(2);

    const firstRow = rows[0];
    expect(firstRow.getAttribute('id')).toEqual('server1');
    expect(firstRow.innerHTML).toContain('Server 1');

    const secondRow = rows[1];
    expect(secondRow.getAttribute('id')).toEqual('server2');
    expect(secondRow.innerHTML).toContain('Server 2');
  });


  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server with an empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })
});