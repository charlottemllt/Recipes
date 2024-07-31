const RECIPES = {
    "1":{
        "Name": "Salade César",
        "Nombre de personnes": 2,
        "Tags": ["Salade"],
        "Ingrédients": {
            "batavia": 40,
            "poulet": 200
        },
        "Temps": 20
    },

    "2":{
        "Name": "Bowl Poulet",
        "Nombre de personnes": 2,
        "Tags": [],
        "Ingrédients": {
            "avocat": 1,
            "mais": 100,
            "filet de poulet": 2
        },
        "Temps": 45
    },

    "3":{
        "Name": "Cuisse de poulet et légumes rôtis au thym",
        "Nombre de personnes": 2,
        "Tags": [],
        "Ingrédients": {
            "poivron rouge": 1,
            "courgette": 1,
            "tomates cerises": 250,
            "cuisse de poulet": 2,
            "thym séché": 2,
            "farfalle": 140,
            "copeaux de grana padano": 40,
            "huile d'olive": 1.5,
            "beurre": 1
        },
        "Temps": 90
    }
}

const INGREDIENTS = {
    "batavia": ["g de ", "légume", "batavia", "batavia"],
    "poulet": ["g de ", "viande", "poulet", "poulet"],
    "filet de poulet": ["", "viande", "filet de poulet", "filets de poulet"],
    "avocat": ["", "légume", "avocat", "avocats"],
    "mais": ["g de ", "légume", "maïs", "maïs"],
    "haricots rouges": ["g d'", "légume", "haricots rouges", "haricots rouges"],
    "riz": ["g de ", "féculent", "riz", "riz"],
    "galette d'épeautre": ["", "galette", "galette d'épeautre", "galettes d'épeautre"],
    "poireau(x)": ["", "légume", "poireau", "poireaux"],
    "spaghetti": ["g de ", "féculent", "spaghetti", "spaghetti"],
    "lardons": ["g de ", "viande", "lardons", "lardons"],
    "poivron rouge": ["", "légume", "poivron rouge", "poivrons rouges"],
    "courgette": ["", "légume", "courgette", "courgettes"],
    "tomates cerises": ["g de ", "légume", "tomates cerises", "tomates cerises"],
    "cuisse de poulet": ["", "viande", "cuisse de poulet", "cuisses de poulet"],
    "thym séché": ["cc de ", "condiment", "thym séché", "thym séché"],
    "farfalle": ["g de ", "féculent", "farfalle", "farfalle"],
    "copeaux de grana padano": ["g de ", "fromage", "copeaux de grana padano", "copeaux de grana padano"],
    "huile d'olive": ["cs d'", "condiment", "huile d'olive", "huile d'olive"],
    "beurre": ["g de ", "condiment", "beurre", "beurre"]
}