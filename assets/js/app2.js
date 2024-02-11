let cl = console.log;
const card = document.getElementById('card');
const namecontrol = document.getElementById('name');
const populationcontrol = document.getElementById('population');
const capital = document.getElementById('capital');
const searchbarcontrol = document.getElementById('searchbar');
const icon = document.getElementById('icon');
const icon2 = document.getElementById('icon2');
const icon3 = document.getElementById('icon3');






const count = [...countries].sort((n1, n2) => {

    if (n1.name < n2.name) {
        return -1
    } else {
        return 1
    }


});
cl(count)//////// ascending 

const count23name = [...countries].sort((n1, n2) => {

    if (n1.name < n2.name) {
        return -1
    } else {
        return 1
    }


}).reverse();//// name desecending

const count2 = [...countries].sort((n1, n2) => {

    if (n1.capital < n2.capital) {
        return -1
    } else {
        return 1
    }


});
cl(count2)//// capital ascending


const count2234name = [...countries].sort((n1, n2) => {

    if (n1.capital < n2.capital) {
        return -1
    } else {
        return 1
    }


}).reverse();//// capiatal desacnding


const countpopulation = [...countries].sort((n1, n2) => {

    if (n1.population > n2.population) {
        return -1
    } else {
        return 1
    }


});

const countpopulation2 = [...countries].sort((n1, n2) => {

    if (n1.population < n2.population) {
        return -1
    } else {
        return 1
    }


});


const onclicknamename = () => {

    icon.classList.remove('d-none')

    if (icon.className.includes('fa-arrow-down')) {

        cardtemplating(count)
        icon.classList.remove('fa-arrow-down')
        icon.classList.add('fa-arrow-up')
    } else {
        cardtemplating(count23name)
        icon.classList.remove('fa-arrow-up')
        icon.classList.add('fa-arrow-down')
    }


}
const onclicknamecapital = () => {
    icon2.classList.remove('d-none')

    if (icon2.className.includes('fa-arrow-down')) {

        cardtemplating(count2)
        icon2.classList.remove('fa-arrow-down')
        icon2.classList.add('fa-arrow-up')

    } else {
        cl(count2234name)
        cardtemplating(count2234name)
        icon2.classList.remove('fa-arrow-up')
        icon2.classList.add('fa-arrow-down')
        cl(count2234name)
    }
}

const onclickpopulation = () => {

    icon3.classList.remove('d-none');
    if (icon3.className.includes('fa-arrow-down')) {

        cardtemplating(countpopulation2)
        icon3.classList.remove('fa-arrow-down')
        icon3.classList.add('fa-arrow-up')

    } else {

        cardtemplating(countpopulation)
        icon3.classList.remove('fa-arrow-up')
        icon3.classList.add('fa-arrow-down')

    }
}

const oncountryEnter = (e) => {
    let enteredValue = e.target.value
    let NewCountryArray = countries.filter(ele => {
        // return ele.capital?.toLowerCase().includes(enteredValue);
        console.log(ele.languages);
        return ele.capital?.toLowerCase().includes(enteredValue);
    })
    cardtemplating(NewCountryArray);
}
// let newCountries = countries.map(element => {
// 	if(element.capital == undefined){
// 		element.capital = 'NA'
// 		return element
// 	}else{
// 		return element
// 	}

// })
// cardtemplating(newCountries)


const cardtemplating = (ele) => {
    let result = "";
    ele.forEach(eve => {
        result += `
        <div class="col-md-2  mb-4">

              <div class="card">
                        <div class="card-body">
                            <figure>
                               <div class="text-center  height">
                                <img src="${eve.flag}">
                                <figcaption>
                                    <h3 class='py-3'>
                                        ${eve.name}
                                    </h3>
                               </div>
                                    <div class="headings">
                                        <h5>
                                            capital : ${eve.capital}
                                        </h5>
                                        <h5>
                                            languagae :${eve.languages}
                                        </h5>
                                        <h5>
                                            population : ${eve.population}
                                        </h5>
                                    </div>

                                </figcaption>

                            </figure>
                        </div>


                    </div>
                    </div>
   
   
   
   `
        card.innerHTML = result;



    });

}

const ascent = (ele) => {
    cl(ele)
}

cardtemplating(countries)

namecontrol.addEventListener('click', onclicknamename)
capital.addEventListener('click', onclicknamecapital)
populationcontrol.addEventListener('click', onclickpopulation)
searchbarcontrol.addEventListener('keyup', oncountryEnter)

