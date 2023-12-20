document.addEventListener('DOMContentLoaded', function() {
    const comicList = document.querySelectorAll('.comic-list article');
    const comicTitle = document.getElementById('comic-title');
    const comicContent = document.getElementById('comic-content');

    comicList.forEach(article => {
        article.addEventListener('click', function() {
            const comicId = this.getAttribute('data-id');
            loadComic(comicId);
        });
    });

    function loadComic(comicId) {
        // Thực hiện AJAX request hoặc tải nội dung truyện theo comicId
        // Trong ví dụ này, chúng ta sử dụng nội dung cứng để minh họa

        let fakeApiResponse;

        if (comicId === 'onepiece') {
            fakeApiResponse = {
                title: 'One Piece',
                content: 'One Piece là một bộ truyện tranh Nhật Bản được viết và minh họa bởi Eiichiro Oda. Bộ truyện kể về cuộc phiêu lưu của Monkey D. Luffy, một chàng trai có khả năng co dãn như cao su sau khi ăn nhầm Quả Gomu Gomu, và đồng đội của mình. One Piece mô tả thế giới rộng lớn với đại dương bao la, đảo quốc và hải tặc nổi tiếng. Bộ truyện được biết đến với cốt truyện sâu sắc, nhân vật phong phú và các pha hành động hấp dẫn.',
                images: ['onepiece1.jpg', 'onepiece2.jpg'], // Thêm đường dẫn hình ảnh
                audio: 'onepiece_audio.mp3', // File âm thanh
                video: 'onepiece_video.mp4' // File video
            };
        } else if (comicId === 'naruto') {
            fakeApiResponse = {
                title: 'Naruto',
                content: 'Naruto là một bộ truyện tranh Nhật Bản được sáng tác bởi Masashi Kishimoto. Bộ truyện kể về cuộc phiêu lưu của Naruto Uzumaki, một ninja trẻ có ước mơ trở thành Hokage, lãnh đạo của làng ninja của mình. Naruto tập trung vào chủ đề của tình bạn, lòng dũng cảm, và sự phấn đấu để vượt qua khó khăn. Bộ truyện đã trở thành một trong những tác phẩm nổi tiếng nhất và có ảnh hưởng sâu rộng trong văn hóa pop Nhật Bản.',
                images: ['naruto1.jpg', 'naruto2.jpg'],// Thêm đường dẫn hình ảnh
                //audio: 'naruto_audio.mp3', // File âm thanh
                //video: 'naruto_video.mp4' // File video
            };
        }

        // Hiển thị thông tin truyện
        comicTitle.textContent = fakeApiResponse.title;

        // Tạo một thẻ div để chứa nội dung truyện và hình ảnh
        let contentHtml = '<div>';
        // Hiển thị hình ảnh
        fakeApiResponse.images.forEach(image => {
            contentHtml += `<img src="${image}" alt="${fakeApiResponse.title}">`;
        });
        // Hiển thị file âm thanh (mp3)
        contentHtml += `<audio controls><source src="${fakeApiResponse.audio}" type="audio/mp3"></audio>`;
        // Hiển thị file video (mp4)
        contentHtml += `<video width="100%" height="auto" controls><source src="${fakeApiResponse.video}" type="video/mp4"></video>`;
        // Hiển thị nội dung truyện
        contentHtml += `<p>${fakeApiResponse.content}</p></div>`;
        comicContent.innerHTML = contentHtml;
    }
});
