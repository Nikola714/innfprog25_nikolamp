#1 lage array med indexer
prw = [
    "kompilator",
    "variabel",
    "funksjon",
    "rekursjon",
    "syntaks",
    "bibliotek",
    "algoritme",
    "iterasjon",
    "datastruktur",
    "kommentar"
]

#2 definerer funkjson "lungo" som tar "ordliste" som en parameter.
# if test sjekker om den paramet er definert, hvis ikke stop funkjson, 
# hvis er definert funksjon gir den element som er lengst
def lungo(ordliste):
    if not ordliste: 
        return None
    return max(ordliste, key=len)

#3 definere funksjon som tar imot et paramet
#  funksjon legger til et ny element til array ved å bruke paramet og sletter mellomrom
def add(nytt_ord):
    prw.append(nytt_ord.strip())

#4 kalle funskjon som tar imot objektorientert som et paramet dvs. ny element i array
add("objektorientert")

#5 lage variabel som tar imot første funksjon som tar imot array som et paramet
# i resultat for vi den lengste elemnt fra array 
resultat = lungo(prw)
print("Lengst:", resultat)
