import React, { Component } from "react";
import { NewsItem } from "./NewsItem";

export class News extends Component{
    articles =[
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "World Cup: Unbeaten South Africa face winless Netherlands",
            "description": "Follow live text, in-play video clips and radio commentary as unbeaten South Africa play the winless Netherlands in the Men's Cricket World Cup 2023.",
            "url": "http://www.bbc.co.uk/sport/live/cricket/66858173",
            "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
            "publishedAt": "2023-10-17T08:37:22.1965834Z",
            "content": "In case you were wondering, it's South Africa who are the unbeaten side - triumphing over Sri Lanka, where they racked up a few tournament records, and Australia.\r\nMeanwhile the Netherlands have been… [+160 chars]"
        },
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "sport",
            "title": "Proteas won't be 'arrogant' against Dutch at Cricket World Cup",
            "description": "South Africa captain Temba Bavuma insists his team cannot afford to be \"arrogant or loud\" when they face the Netherlands in the Cricket World Cup on Tuesday, wary of the shock defeat they suffered against the Dutch at the World T20 last year.",
            "url": "https://www.news24.com/sport/cricket/worldcup/proteas-wont-be-arrogant-against-dutch-at-world-cup-20231016",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/9521/932f66d24a2544de92bec730991660a3.jpg",
            "publishedAt": "2023-10-17T06:45:50",
            "content": "<ul><li>After a strong start to the Cricket World Cup where they've won their two opening games, South Africa will look for a third win when they face the Netherlands on Tuesday.</li><li>They won't u… [+3589 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "The doctor who played at World Cups in two sports",
            "description": "Meet Rudie van Vuuren, who in 2003 played in both the Rugby World Cup and Cricket World Cup.",
            "url": "http://www.bbc.co.uk/sport/66996021",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/86B1/production/_131318443_whatsappimage2023-10-03at15.00.02-1.jpg",
            "publishedAt": "2023-10-16T22:52:17.257604Z",
            "content": "Rudie van Vuuren is the only person to represent their country at two World Cups in different sports\r\n\"You know, sometimes rugby players on cricket fields are not good things.\"\r\nAs the only man to ha… [+11677 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor(){
        super();
        console.log("Hello iam a constructor from news components")
        this.state={
            articles: this.articles,
            loading: false
        }
    }
    render(){
        return(
            <>
            <div className="container">
                <h2>News Daily - Top Heading</h2>
                <div className="row">
                    <div className="col-md-4 col-12">
                        <NewsItem title="myTitle" description="mydesc" imageUrl="https://m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png" newsUrl="TODO"/>
                    </div>
                    <div className="col-md-4 col-12">
                        <NewsItem title="myTitle" description="mydesc"/>
                    </div>
                    <div className="col-md-4 col-12">
                        <NewsItem title="myTitle" description="mydesc"/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
