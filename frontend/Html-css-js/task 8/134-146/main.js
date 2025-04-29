// تكليف 1
let ip1 = "2001:db8:3333:4444:5555:6666:7777:8888";
let re1 = /^(\w{4}):(\w{2,4}):(\w{3,4}):(\w{3,4}):(\w{3,4}):(\w{3,4}):(\w{3,4}):(\w{4})$/;
console.log(ip1.match(re1));


//----------------------------

//تكليف 2

let specialNames2 = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let re2 = /\bOs\d*O\b/g;
console.log(specialNames2.match(re2)); // ["Os10O", "OsO", "Os100O"]


//----------------------------

//تكليف 3
let phone3 = "+(995)-123 (4567)";
let re3 = /^\+\(\d{3}\)-\d{3} \(\d{4}\)$/;
console.log(phone3.match(re3)); // match found


//----------------------

// تكليف 4

let re4 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https?          => Matches "http" or "https"
// :\/\/           => Followed by "://"
// (?:[-\w]+\.)?   => Optional subdomain like "www." or "blog."
// ([-\w]+)        => Main domain name (captured in a group)
// \.\w+           => Main top-level domain like .org or .com
// (?:\.\w+)?      => Optional second-level domain like .co.uk
// \/?             => Optional forward slash after the domain
// .*              => Matches any characters after (path, parameters, etc.)
// i               => Case-insensitive flag



//------------------

//تكليف 5

let date1_5 = "25/10/1982";
let date2_5 = "25 - 10 - 1982";
let date3_5 = "25 10 1982";
let date4_5 = "25 10 82";

let re5 = /\d{2}(\/| - | )\d{2}\1\d{2,4}/;

console.log(date1_5.match(re5)); // "25/10/1982"
console.log(date2_5.match(re5)); // "25 - 10 - 1982"
console.log(date3_5.match(re5)); // "25 10 1982"
console.log(date4_5.match(re5)); // "25 10 82"


///--------------------------

//تكليف 6

let url1_6 = 'elzero.org';
let url2_6 = 'http://elzero.org';
let url3_6 = 'https://elzero.org';
let url4_6 = 'https://www.elzero.org';
let url5_6 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re6 = /^(https?:\/\/)?(www\.)?\w+\.\w+(:\d+)?(\/[\w\/.?=&%-]*)?$/;

console.log(url1_6.match(re6));
console.log(url2_6.match(re6));
console.log(url3_6.match(re6));
console.log(url4_6.match(re6));
console.log(url5_6.match(re6));

//------------------




