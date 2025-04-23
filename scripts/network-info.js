let params = getParams($argument);

!(async () => {
  let panel = {
    title: "Network Info",
    content: `节点: ${$network.v4.primaryAddress}\n` +
             `延迟: ${$network.v4.primaryRouter}ms`
  };
  
  $done(panel);
})();