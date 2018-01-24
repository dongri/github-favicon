(function() {
    let c = $("[itemprop=name]").text().charAt(0);
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://raw.githubusercontent.com/dongri/github-favicon/master/favicons/favicon-'+c+'.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
})();
