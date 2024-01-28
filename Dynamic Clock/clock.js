<script>
    
    var clock = setInterval(clocktiming,1000)

    function clocktiming(){

        var d = new Date();
        var ok = d.toLocaleTimeString();   

        document.getElementById('showclock').innerHTML = ok;
    }
</script>