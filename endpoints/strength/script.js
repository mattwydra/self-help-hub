function toggleInfo(id) {
    var info = document.getElementById(id);
    info.style.display = (info.style.display === 'none' || info.style.display === '') ? 'block' : 'none';
}