function jsonp(options) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = `${options.url}`;
        document.body.appendChild(script);
        window['jQuery1102004311725900465668_1608127615389'] = function (data) {
            resolve(data);
            document.body.removeChild(script);
        }
    })
}