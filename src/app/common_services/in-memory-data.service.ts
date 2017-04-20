import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let portfolio = [
             {
                "project_name": "Inflo presentation",
                "category": "infographics",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/inflo_presentation.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/inflo_presentation.jpg"
                ]
            },
            {
                "project_name": "AmeriStudentStyle",
                "category": "flyers",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/ameri_style.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/ameri_style.jpg"
                    
                ]
            },
            {
                "project_name": "AmeriStudentCatalog1",
                "category": "catalogs",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/ameri_catalog1.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/ameri_catalog1.jpg"
                ]
            },
            {
                "project_name": "AmeriStudentCatalog2",
                "category": "catalogs",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/ameri_catalog2.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/ameri_catalog21.jpg",
                    "./assets/images/portfolio/sizes/ameri_catalog22.jpg"
                ]
            },
            {
                "project_name": "Inflo Limited",
                "category": "catalogs, infographics",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/b_inflo.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/b_inflo1.jpg",
                    "./assets/images/portfolio/sizes/b_inflo2.jpg",
                    "./assets/images/portfolio/sizes/b_inflo3.jpg",
                    "./assets/images/portfolio/sizes/b_inflo4.jpg"
                ]
            },
            {
                "project_name": "Marcos",
                "category": "catalogs",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/marcos.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/marcos1.jpg",
                    "./assets/images/portfolio/sizes/marcos2.jpg"
                ]
            },
            {
                "project_name": "Green star",
                "category": "catalogs",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/green_star.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/green_star1.jpg",
                    "./assets/images/portfolio/sizes/green_star2.jpg"
                ]
            },
            {
                "project_name": "SomadomeCatalog",
                "category": "catalogs",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/somadome_catalog.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/somadome_catalog1.jpg",
                    "./assets/images/portfolio/sizes/somadome_catalog2.jpg",
                    "./assets/images/portfolio/sizes/somadome_catalog3.jpg",
                    "./assets/images/portfolio/sizes/somadome_catalog4.jpg"
                ]
            },
            {
                "project_name": "SomadomeStyle",
                "category": "catalogs",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/somadome_style.jpg",
                "imgs": [
                    "./assets/images/portfolio/size/somadome_style1.jpg",
                    "./assets/images/portfolio/sizes/somadome_style2.jpg"
                ]
            },
             {
                "project_name": "Suunto",
                "category": "catalogs",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/suunto.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/suunto00.jpg",
                    "./assets/images/portfolio/sizes/suunto11.jpg",
                    "./assets/images/portfolio/sizes/suunto22.jpg"
                ]
            },
            {
                "project_name": "GTED",
                "category": "flyers, infographics",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/gted.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/gted.jpg"
                ]
            },
            {
                "project_name": "Zima",
                "category": "flyers",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/zima.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/zima.jpg"
                ]
            },
            {
                "project_name": "Envisio",
                "category": "flyers",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/envisio.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/envisio.jpg"
                ]
            },
           
            {
                "project_name": "Meka",
                "category": "flyers",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/meka.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/meka.jpg"
                ]
            },
            {
                "project_name": "Onyx Shutters",
                "category": "flyers",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/onyx.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/onyx.jpg"
                ]
            },
            {
                "project_name": "Wake academy",
                "category": "flyers",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/wake_style.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/wake_style.jpg"
                ]
            },
            {
                "project_name": "Addinol",
                "category": "flyers",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/addinol.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/addinol.jpg"
                ]
            },
            {
                "project_name": "Trybe style of presentation",
                "category": "infographics, web",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/trybe.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/trybe.jpg"
                ]
            },
            {
                "project_name": "BRIGHTEDGE",
                "category": "infographics",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/brightedge.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/brightedge.jpg"
                ]
            },
             {
                "project_name": "CONTENT+",
                "category": "infographics",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/content.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/content.jpg"
                ]
            },
             {
                "project_name": "Inflo slides",
                "category": "infographics",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/inflo_slides.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/inflo_slides.jpg"
                ]
            },
            {
                "project_name": "Ameri banners",
                "category": "infographics",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/ameri_banners.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/ameri_banners.jpg"
                ]
            },
            {
                "project_name": "Reebok banner",
                "category": "web",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/banner_reebok.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/banner_reebok.jpg"
                ]
            },
            {
                "project_name": "Jewelry banner",
                "category": "web",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/banner_jewelry.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/banner_jewelry.jpg"
                ]
            },
             {
                "project_name": "Travel banner",
                "category": "web",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/banner_jewelry.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/banner_jewelry.jpg"
                ]
            },
            {
                "project_name": "Headshop banner",
                "category": "web",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/banner_headshop.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/banner_headshop.jpg"
                ]
            },
            {
                "project_name": "Sell banners",
                "category": "web",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/b3.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/b1.jpg",
                    "./assets/images/portfolio/sizes/b2.jpg",
                    "./assets/images/portfolio/sizes/b3.jpg",
                    "./assets/images/portfolio/sizes/b5.jpg",
                    "./assets/images/portfolio/sizes/b6.jpg"
                ]
            },
            {
                "project_name": "Kajamba banner",
                "category": "web",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/kajamba.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/kajamba.jpg"
                ]
            },
            {
                "project_name": "ApplyProprerty banner",
                "category": "web",
                "project_overview": "some info",
                "thumb": "./assets/images/portfolio/thumbs/applyproprerty.jpg",
                "imgs": [
                    "./assets/images/portfolio/sizes/applyproprerty.jpg"
                ]
            }
            ];
        let skills = [
            {
                "skill": "Adobe Photoshop",
                "percent": 89,
                "width": "89%",
                "padding": "11%"
            },
            {
                "skill": "Adobe Illustrator",
                "percent": 95,
                "width": "95%",
                "padding": "5%"
            },
             {
                "skill": "Adobe InDesign",
                "percent": 70,
                "width": "70%",
                "padding": "30%"
            },
            {
                "skill": "UI/UX",
                "percent": 50,
                "width": "50%",
                "padding": "50%"
            }
            ,
            {
                "skill": "BBQ",
                "percent": 100,
                "width": "100%",
                "padding": "0%"
            }
            ];
        return { portfolio, skills };
    }
}
