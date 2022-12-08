# Modus Versus Psd React Project

# Milestone 2:
    Components:
    Все компоненты хранятся в папке /src/components
    Я разделил проект на страницы и в папке /src/components/Pages хранится каждая страница
    
    State:
    Я много где использовал state. К примеру при работе с новстной API, я хранил все новости в state
    Путь до страница новостей /src/components/Pages/Feature/News.js

    API Request:
    В компоненте /src/components/Pages/Feature/News.js я релизовал работу с новостной API.
    Она возвращает массив из подобных JSON-ов:
    {
        author: "Daniel Drake"
        content: "Dopisy byly odesílány z pot, které nedisponují kamerovým systémem. Kuleba uvedl, e odesílatelé udlali hodn pro to, aby skryli svoji totonost a zahladili stopy.\r\nZloinci také pijali opatení, aby na zá… [+1350 chars]"
        description: "Jednatřicet ukrajinských zastupitelských úřadů v patnácti různých zemí obdrželo v posledních dnech podezřelé nebo výhrůžné dopisy, většina z nich obsahovala zakrvácené zvířecí oči. Podle ukrajinského ministra zahraničí Dmytra Kuleby byla adresa odesílatele u …"
        publishedAt: "2022-12-08T07:54:04Z"
        source: {id: null, name: 'Novinky.cz'}
        title: "Adresa odesílatele obálek se zvířecíma očima: pobočka Muskovy Tesly"
        url: "https://www.novinky.cz/clanek/valka-na-ukrajine-adresa-odesilatele-obalek-se-zvirecima-ocima-pobocka-muskovy-tesly-40416790"
        urlToImage: "https://d15-a.sdn.cz/d_15/c_img_QJ_s/axhIO/policie-brno.jpeg?fl=cro,0,1,848,477%7Cres,1200,,1%7Cwebp,75"
    }
    После отрисовывал 5 компоненов новостей OneNews

# Milestone 2
    Navigation:
    Меню навигации находится в /src/components/Header.js
    Здесь просто находятся ссылки на другие страницы сайта
    А вот переключение и отрисовывание каждой страницы на свой ссылке находится в /src/App.js
    Благодаря компоненту BrowserRouter и Route я могу переходить на другие страницы
    Компонент Route отрисовывает компонент element на пути path
