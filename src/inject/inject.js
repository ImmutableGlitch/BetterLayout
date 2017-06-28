chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval)

      console.log('Extension started')

      // GOOGLE SEARCH
      $('#cnt > div:nth-child(11)').css({
        'max-width': '800px',
        'margin': '0 25%'
      })

      // REDDIT		
      $('.side').hide()

      $('#siteTable').css({
        'max-width': '1000px',
        'margin': 'auto'
      })
      $('#siteTable div.entry').css({
        'padding-left': '0px'
      })

      $('body > div.content').css({
        'margin': '0 25%'
      })
      $('body > div.content > div.commentarea').css({
        'max-width': '800px',
        'margin': 'auto'
      })

      // IMGUR
      $('#right-content').remove()

      $('#inside > div.left.post-pad > div.post-container').css({
        'margin': '0 25%'
      })

      console.log("And she's finished")
    }
  }, 10)
})
