(function(){
    
    // On ready function
    $(function(){
       loadSampleData();
    }) 
    
    function loadSampleData(){
        fetchSampleData().then(function(data){
            uploadSampleDataInHtml(data)
        })
    }
    
    function fetchSampleData(){
        return $.get("sample-data.json");
    }
    
    function uploadSampleDataInHtml(data){
        var template = $('#content-col-2').html();
        var html = Mustache.to_html(template, data);
        $('#content-col-2').html(html);

    }
    
})();
