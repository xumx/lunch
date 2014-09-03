var fs = require('fs');
var _ = require('underscore');
var mu = require('mu2');

var edm;

// edm = {
//     "id": "36_MY",
//     "country": "MY",
//     "title": "Scorching HOT DEALS From RM28! Archery Accessories, LEGO Superheroes, CASIO & more!",
//     "subject": "Scorching HOT DEALS From RM28! Archery Accessories, LEGO Superheroes, CASIO & more!",
//     "images": "http://www.ebaypowerhouse.com/portal/edm/images/2014/wk36_20140828/my_thu_wk36/"
// };

edm = {
    "id": "36_SG",
    "country": "SG",
    "title": "Hurry! Bid For A Rolex, Omega & MORE",
    "subject": "Mid-Autumn Sale Up to 85% Discount! ",
    "limited": "sg_lapsebuyer_w36_07.jpg",
    "banner": "banner.jpg",
    "images": "http://ebaypowerhouse.com/portal/edm/images/2014_yesmail/wk36lapsebuyer/sg/",
    "more": false,
    "map": [{
        "href": "http://rover.ebay.com/rover/1/3423-163426-1499-29/4?keyword=CategWatchesWk36LapseBuyer&mpre=http%3A%2F%2Fwww.ebay.com.sg%2Fsch%2FWatches-%2F14324%2Fi.html%3F_from%3DR40%26LH_Auction%3D1%26_nkw%3DWatch%2B%2528Rolex%252C%2BOmega%252C%2Bbreitling%252C%2Blongines%252C%2BTag%2BHeuer%252C%2BPanerai%252C%2BIWC%252C%2Boris%2B%2529%26LH_PrefLoc%3D2%26_sop%3D12%0A",
        "origin": [0, 0, 129, 48],
        "title": "Watches"
    }, {
        "href": "http://rover.ebay.com/rover/1/3423-163426-1499-29/4?keyword=CategFashionWk36LapseBuyer&mpre=http%3A%2F%2Fwww.ebay.com.sg%2Fsch%2FWomens-Handbags-Bags-%2F169291%2Fi.html%3F_udlo%3D300%26LH_BIN%3D1%26_from%3DR40%26LH_ItemCondition%3D3000%26_nkw%3D%2528Chanel%252C%2Bvuitton%252C%2Bceline%252C%2Bhermes%252C%2Bdior%252C%2Bgucci%252C%2Bprada%252C%2Bbalenciaga%252C%2Bchloe%2529%2Bbag%26_sop%3D12%0A",
        "origin": [132, 0, 250, 48],
        "title": "Fashion"
    }, {
        "href": "http://rover.ebay.com/rover/1/3423-163426-1499-29/4?keyword=CategSportsWk36LapseBuyer&mpre=http%3A%2F%2Fwww.ebay.com.sg%2Fsch%2Ftaskermania-sg%2Fm.html%3F_sop%3D12%26_armrs%3D1%26_sacat%3D0%26_from%3DR40%26LH_BIN%3D1%26_nkw%3DAdidas%26%3D%26rt%3Dnc%26LH_ItemCondition%3D3%0A",
        "origin": [253, 0, 360, 48],
        "title": "Sports"
    }, {
        "href": "http://rover.ebay.com/rover/1/3423-163426-1499-29/4?keyword=CategKitchenWk36LapseBuyer&mpre=http%3A%2F%2Fwww.ebay.com.sg%2Fsch%2FKitchen-Dining-Bar-%2F20625%2Fi.html%3FLH_ItemCondition%3D3%26_from%3DR40%26LH_BIN%3D1%26_nkw%3Dhello%2Bkitty%2B-disney%26LH_PrefLoc%3D2%26rt%3Dnc%0A",
        "origin": [362, 0, 469, 48],
        "title": "Kitchen"
    }, {
        "href": "http://rover.ebay.com/rover/1/3423-163426-1499-29/4?keyword=CategHomeDecoWk36LapseBuyer&mpre=http%3A%2F%2Fwww.ebay.com.sg%2Fsch%2FHolidays-Cards-Parties-%2F16086%2Fi.html%3FLH_BIN%3D1%26_sop%3D12%26_from%3DR40%26_udhi%3D25%26_nkw%3D%2528lantern%252C%2Bfairy%2Bberries%252C%2Bprojector%252C%2BLED%252C%2Billoom%252C%2Bglow%2529%2B-halloween%2B-mug%2B-memorial%2B-santa%26rt%3Dnc%0A",
        "origin": [473, 0, 679, 48],
        "title": "Home Deco"
    }]
};

// edm = {
//     "id": "35_SG",
//     "title": "Mid-Autumn Sale: Hello Kitty Baking Essentials",
//     "subject": "Mid-Autumn Sale: Hello Kitty Baking Essentials",
//     "limited": "http://media.4at5.net/email_domains/ebay/160602/limitedtime.jpg",
//     "banner":"http://imgur.com/brTNFwN.jpg?1",
//     "country": "SG",
//     "more": false,
//     "images": "",
//     "map": {
//         origin: [0,0,126,49,129,0,223,49,226,0,404,49,406,0,544,49,548,0,677,49]
//     } 
// };

// edm = {
//     "id": "35_MY",
//     "title":"Great Style Savings – From RM39! Grab Deals On Sexy Lingerie, Oakley, Thunderbird Watches & More!",
//     "subject": "Great Style Savings – From RM39! Grab Deals On Sexy Lingerie, Oakley, Thunderbird Watches & More!",
//     "limited": "http://www.ebaypowerhouse.com/portal/edm/images/2014/wk32_20140728/sg/yesmail/limitedtime.jpg",
//     "country": "MY",
//     "images": "",
//     "more": "http://ebaypowerhouse.com/portal/edm/images/2014/wk35_20140818/my/yesmail/more_btn.jpg"
// };

var sections = require('./' + edm.id + '/sections.json');
var products = require('./' + edm.id + '/products.json');
var countries = {
    MY: {
        logo: "http://ebaypowerhouse.com/portal/edm/images/2014/wk35_20140818/my/yesmail/logo_my.jpg",
        href: "http://ebay.com.my",
        facebook: "https://www.facebook.com/eBay.Malaysia",
        twitter: "https://twitter.com/ebaymalaysia1",
        apple: "http://anywhere.ebay.com.my/mobile/iphone/ebay",
        android: "https://play.google.com/store/apps/details?id=com.ebay.mobile",
        unsubscribe: "http://e.deals.ebay.com.my/unsubscribe.jsp",
        privacy: "http://pages.ebay.com.my/help/policies/privacy-policy.html",
        agreement: "http://pages.ebay.com.my/help/policies/user-agreement.html",
        paypal: "https://www.paypal.com/my/webapps/mpp/paypal-buyer-protection"
    },
    SG: {
        logo: "http://ebaypowerhouse.com/portal/edm/images/2014_yesmail/header/ebay-sg-logo.png",
        href: "http://www.ebay.com.sg/",
        facebook: "https://www.facebook.com/eBay.Singapore",
        twitter: "https://twitter.com/eBaySingapore1",
        apple: "http://anywhere.ebay.com.sg/mobile/iphone/ebay",
        android: "https://play.google.com/store/apps/details?id=com.ebay.mobile",
        unsubscribe: "http://e.deals.ebay.com.sg/unsubscribe.jsp",
        privacy: "http://pages.ebay.com.sg/help/policies/privacy-policy.html",
        agreement: "http://pages.ebay.com.sg/help/policies/user-agreement.html",
        paypal: "https://www.paypal.com/sg/webapps/mpp/paypal-buyer-protection"
    },
    PH: {
        facebook: "https://www.facebook.com/eBayPhilippines",
        twitter: "https://twitter.com/eBayPhilippines",
        apple: "http://anywhere.ebay.ph/mobile/iphone/ebay",
        android: "https://play.google.com/store/apps/details?id=com.ebay.mobile",
        unsubscribe: "http://e.deals.ebay.ph/unsubscribe.jsp",
        privacy: "http://pages.ebay.ph/help/policies/privacy-policy.html",
        agreement: "http://pages.ebay.ph/help/policies/user-agreement.html",
        paypal: "https://www.paypal.com/ph/webapps/mpp/paypal-buyer-protection"
    }
};

edm.map = _.map(edm.map, function(button) {
    // button.big = _.map(button.origin, function(e) {
    //     return Math.floor(e * 644 / 680)
    // }).join(',');
    button.big = button.origin.join(',');

    button.small = _.map(button.origin, function(e) {
        return Math.floor(e * 460 / 680)
    }).join(',');

    button.smaller = _.map(button.origin, function(e) {
        return Math.floor(e * 380 / 680)
    }).join(',');

    return button;
});

edm = _.extend(edm, countries[edm.country]);
edm.sections = _.map(sections, function(section) {
    section.products = _.where(products, {
        section: section.title
    });

    return section;
});

if (edm.banner) edm.banner = edm.images + edm.banner;
if (edm.limited) edm.limited = edm.images + edm.limited;

_.each(edm.sections, function(section) {
    section.rows = [];
    section.src = edm.images + section.src;
    _.each(section.products, function(p1, index) {
        if (index % 2 === 0) {
            p1.src = edm.images + p1.src;

            p2 = section.products[index + 1];
            if (p2) {
                p2.src = edm.images + p2.src;
            } else {
                console.error("Wrong number of products");
            }

            section.rows.push({
                left: p1,
                right: p2
            });
        }
    });

    if (section.rows.length == 0) {
        console.log("not section");
        delete(section.rows);
    }
});

mu.root = __dirname + '/';
var input = mu.compileAndRender('mail.html', edm);
var output = fs.createWriteStream(__dirname + "/" + edm.id + "/" + edm.id + ".html");

input.on('data', function(data) {
    output.write(data);
});
