$(document).ready(function(){
    var blogDetails = [
        {
            name: 'Understanding Web Real-Time Communication (WebRTC)',
            desc: `
                A blog explaining the working of WebRTC, using easy to understand examples and analogies.
            `,
            url: 'https://medium.com/@anto.christo.20/understanding-web-real-time-communication-webrtc-d4cec5a43f2f'
        }
    ];

    for(var blog of blogDetails){
        var div = `
        <div class="row">
            <a href="${blog.url}" style="font-size: 1.5rem; color: #dfeceb">${blog.name}</a>
            <div>
                <span style="font-size: 1.1rem; color: #b3d3d1;">${blog.desc}</span>
                <a href="${blog.url}" target="_blank" style="color: #b3d3d1;"><u>Read Blog</u></a>
            </div>
            <hr style="margin-top: 2rem; margin-bottom: 0.6rem"/>
            </div>
        `;

        $('#blog-list').append(div);
    }

    $('.sidenav').sidenav({draggable:true});
});