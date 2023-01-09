function GerarQRCode(){
    var input = document.querySelector('textarea').value;
    var Googleapi = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl=';
    var conteudo = Googleapi + encodeURIComponent(input);
    document.querySelector('#qrcode-img').src = conteudo;
}