document.addEventListener('DOMContentLoaded', function() {
    
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('fdate').min = today;

    document.getElementById('fdate').addEventListener('input', function() {
        const fromDate = this.value;
        document.getElementById('tdate').min = fromDate;
    });

});
