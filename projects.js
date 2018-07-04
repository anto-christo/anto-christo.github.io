$(document).ready(function(){
    var projectDetails = [
        {
            name: 'WebRTC Video Calling',
            desc: `
                A peer-to-peer web-based video calling application built entirely using WebRTC and Node.js. 
            `
        },
        {
            name: 'Ease C',
            desc: `
                2nd Runner Up project of MUMBAI HACKATHON 2017. Ease C is a set of 3 libraries consisting of 90
                extremely useful and easy to use functions that are otherwise not present in the standard header files of C.
            `
        },
        {
            name: 'Bling',
            desc: `
                A cross-platform mobile application proposed to be implemented at Don Bosco Institute of Technology
                to facilitate college administration and faculties to send notices directly to the intended students. 
            `
        }
    ];

    for(var detail of projectDetails){
        var div = `
            <div class="col m4">
                <div class="card white">
                    <div class="card-content" style="height:200px">
                        <span class="card-title">${detail.name}</span>
                        <p style="text-align: justify; text-justify: inter-word;">${detail.desc}</p>
                    </div>
                    <div class="card-action">
                        <center><button class="btn-flat light-blue darken-4 white-text">View More</button><center>
                    </div>
                </div>
            </div>
            `;

        $('#project-list').append(div);
    }
});