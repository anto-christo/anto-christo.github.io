$(document).ready(function(){
    var projectDetails = [
        {
            name: 'WebRTC Video Calling',
            desc: `
                A peer-to-peer web-based video calling application built entirely using WebRTC and Node.js.
            `,
            url: 'video-calling.html'
        },
        {
            name: 'Ease C',
            desc: `
                2nd Runner Up project of MUMBAI HACKATHON 2017. Ease C is a set of 3 libraries consisting of 90
                extremely useful and easy to use functions that are otherwise not present in the standard header files of C.
            `,
            url: 'easec.html'
        },
        {
            name: 'Bling',
            desc: `
                A cross-platform mobile application proposed to be implemented at Don Bosco Institute of Technology
                to facilitate college administration and faculties to send notices directly to one or more classes of students. 
            `,
            url: 'bling.html'
        },
        {
            name: 'Inherent Resolve',
            desc: `
                A simple action game built using JavaScript for Teknack 2018 that can be played using the keyboard or using
                the touch controls provided on the mobile interface by connecting the mobile and PC via a passcode. 
            `,
            url: 'inherent.html'
        },
        {
            name: 'Tweak',
            desc: `
                A cross-platform mobile application built using React Native to provide interactive courses on English
                grammar and vocabulary. To be launched soon under the organization of Tweak Academy.
            `,
            url: 'tweak.html'
        },
        {
            name: 'Lords of the Isles',
            desc: `
                A massive online multiplayer game built using JavaScript for Teknack 2018. Explore the isles of the
                world, buy islands and ships to gather and trade resources to become the ultimate Lord of the Isles. 
            `,
            url: 'loi.html'
        },
        {
            name: 'GitStarted',
            desc: `
                Project built under MUMBAI HACKATHON 2018. An attempt to promote open source by filtering out 
                suitable projects from GitHub so as to provide users new to the world of open source with projects to begin with. 
            `,
            url: 'gstarted.html'
        },
        {
            name: 'Space Rush',
            desc: `
                A space-themed endless game built using JavaScript for Teknack 2017. Manoeuvre your spaceship
                by dodging the asteroids/planets enroute while collecting fuels to stay afloat.
            `,
            url: 'srush.html'
        }
    ];

    for(var detail of projectDetails){
        var div = `
            <div class="col l4 m6 s12">
                <div class="card white">
                    <div class="card-content" style="height:200px">
                        <span class="card-title">${detail.name}</span>
                        <p style="text-align: justify; text-justify: inter-word;">${detail.desc}</p>
                    </div>
                    <div class="card-action">
                        <center><a href="${detail.url}" class="btn-flat waves-effect light-blue darken-4 white-text">View More</a><center>
                    </div>
                </div>
            </div>
            `;

        $('#project-list').append(div);
    }

    $('.sidenav').sidenav({draggable:true});
});