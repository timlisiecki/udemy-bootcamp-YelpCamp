var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "http://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5259404.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "Desert Mesa",
        image: "https://www.nps.gov/nabr/planyourvisit/images/campground_utahscyncty.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "Zion Narrows",
        image: "http://cdn.camptrend.com/wp-content/uploads/2015/06/Jeff-Reid-Zion-Narrows-CampTrend.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "Granite Hill",
        image: "https://farm4.staticflickr.com/3211/3062207412_03acc28b80.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "Salmon River",
        image: "http://cdn.camptrend.com/wp-content/uploads/2014/04/Plural-Photography-Camping-on-the-Kern-River_CampTrend.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "Denali Lights",
        image: "http://cdn.camptrend.com/wp-content/uploads/2016/12/Daryll-Vispo-Denali-Lights-camptrend.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "Monument Valley",
        image: "http://cdn.camptrend.com/wp-content/uploads/2016/10/Kevin-Kaminski-Monument-Valley-Sunrise-camptrend.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "Reflection Canyon",
        image: "http://cdn.camptrend.com/wp-content/uploads/2016/06/Julia-Reflection-Canyon-camptrend.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "Stonewall Peak",
        image: "http://cdn.camptrend.com/wp-content/uploads/2016/05/Tyler-Reeves-Stonewall-Peak-camptrend.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "Trail Canyon",
        image: "http://cdn.camptrend.com/wp-content/uploads/2016/04/Ryan-Morgan-Trail-Canyon-camptrend.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "Lago Pehoe",
        image: "http://cdn.camptrend.com/wp-content/uploads/2016/03/Austin-Trigg-Pisco-on-Lago-Pehoe-camptrend.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "Resurrection Bay",
        image: "http://cdn.camptrend.com/wp-content/uploads/2016/03/Bradn-Frankenfield-Resurrection-Bay-camptrend.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "Roof of the World",
        image: "http://cdn.camptrend.com/wp-content/uploads/2015/11/Nate-Roof-Of-The-World-camptrend.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "New Plymouth",
        image: "http://cdn.camptrend.com/wp-content/uploads/2015/11/Jeff-Nass-New-Plymouth-CampTrend.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "Lost Coast Trail",
        image: "http://cdn.camptrend.com/wp-content/uploads/2015/10/Alyx-Schwarz-Lost-Coast-Trail-CampTrend.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    },
    {
        name: "Peyto Lake",
        image: "http://cdn.camptrend.com/wp-content/uploads/2015/09/Joel-Schatt-Peyto-Lake-CampTrend.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Colt",
            id: "584ef52f624f151b0ce85317"
        }
    }
]
  
function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    Comment.create(
                        {
                            text: "This place is great but I wish there was wifi.",
                            author: {
                                username: "Homer",
                                id: "584f07fe049194c41197d0a9"
                            }
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment.");
                            }
                    });
                }
            });
        });
    });
}

module.exports = seedDB;