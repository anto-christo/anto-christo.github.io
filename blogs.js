$(document).ready(function(){
    var blogDetails = [
        {
            name: 'Understanding Web Real-Time Communication (WebRTC)',
            desc: `
                A blog explaining the working of WebRTC using easy to understand examples and analogies.
            `,
            url: 'https://medium.com/@anto.christo.20/understanding-web-real-time-communication-webrtc-d4cec5a43f2f'
        }
    ];

    for(var detail of blogDetails){
        var div = `
        <div class="col l4 m6 s12">
            <div class="card white">
                <div class="card-content" style="height:200px">
                    <span class="card-title">${detail.name}</span>
                    <p style="text-align: justify; text-justify: inter-word;">${detail.desc}</p>
                </div>
                <div class="card-action center-align">
                    <a href="${detail.url}" target="_blank" class="btn-flat waves-effect white-text" style="background-color:#3171ac">Read</a>
                </div>
            </div>
        </div>
        `;

        $('#blog-list').append(div);
    }

    $('.sidenav').sidenav({draggable:true});
});