fetch('data/berita.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('news-container');
    container.innerHTML = '';
    data.forEach(item => {
      const article = document.createElement('article');
      article.innerHTML = `<h3>${item.judul}</h3><p>${item.isi}</p><small>${item.tanggal}</small>`;
      container.appendChild(article);
    });
  })
  .catch(() => {
    document.getElementById('news-container').innerHTML = 'Gagal memuat berita.';
  });
