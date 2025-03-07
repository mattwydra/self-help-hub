function showMethod(num) {
    document.querySelectorAll('.method').forEach(el => el.style.display = 'none');
    document.getElementById('method' + num).style.display = 'block';
}