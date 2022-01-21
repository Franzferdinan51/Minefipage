<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <button onclick="getTronweb()">Can you get tronweb from tronlink?</button>
    <script>
        function getTronweb(){
            var obj = setInterval(async ()=>{
                if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
                    clearInterval(obj)
                    document.write("Yes, catch it:",window.tronWeb.defaultAddress.base58)
                }
            }, 10)
        }

    </script>
</body>
</html>