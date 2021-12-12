import react from 'react';
import { Wrapper } from './recykling/wrapper';
import { Element } from '../components/recykling/listElement';

class Recykling extends react.Component{
    render(){
        const title = "O recyklingu";
        const aboutRecycling = "Podstawa recyklingu to odpowiednie segregowanie i selekcja odpadów, a następnie przetworzenie ich na nowe produkty do ponownego wykorzystania. Co jest celem podejmowania tego typu działań? Przede wszystkim oszczędność energii oraz ochrona zasobów naturalnych. Jeśli można przetworzyć i ponownie wykorzystać dany surowiec, nie trzeba eksploatować dóbr planety w celu pozyskania go. To bardzo istotne w przypadku stale malejących złóż zasobów nieodnawialnych. W życiu codziennym obserwuje się rosnącą świadomość na temat ochrony środowiska – w tym także recyklingu. Możliwość ponownego wykorzystywania odpadów to coś, na co zwracają uwagę zarówno producenci, jak i konsumenci. Chociaż postawy ekologiczne często wynikają z panujących trendów, nie można zaprzeczyć, że ten rodzaj mody jest dobroczynny dla planety oraz ogólnej populacji. Coraz więcej klientów rezygnuje z jednorazowych foliowych reklamówek na rzecz materiałowych oraz decyduje się na kupowanie artykułów w opakowaniach biodegradowalnych i przeznaczonych do recyklingu"
        const papier = "Papier otacza ludzi ze wszystkich stron. Artykuły biurowe, rachunki, paragony, zeszyty to tylko jedne z licznych przedmiotów papierowych, które każdy posiada zarówno w domu, jak i w miejscu pracy. Według szacunków prawie połowę światowej wycinki drzew przeznacza się właśnie do produkcji tego surowca, dlatego jego ponowne wykorzystywanie jest tak istotne. Recykling papieru pomaga nie tylko chronić drzewa, ale również przyczynia się do ograniczenia zużycia wody oraz emisji zanieczyszczeń. Papier i tekturę należy wyrzucać do kontenerów niebieskich. Nie każdy produkt nadaje się jednak do recyklingu. Do kosza na makulaturę nie powinno się wrzucać lakierowanych i foliowanych gazet, tapet czy artykułów higienicznych takich jak ręczniki papierowe, waciki, podpaski czy pampersy (te kwalifikują się jako odpady zmieszane).";
        const metal = "Złom metali nieżelaznych doskonale nadaje się do recyklingu i w zasadzie może być przetwarzany nieskończenie wiele razy. Zgromadzony złom żelaza lub złom metali nieżelaznych przekazywany jest do oddziałów lub zakładów strzępienia złomu, w których jest kontrolowany, sortowany i przetwarzany, tak aby spełniał wymagania jakościowe i handlowe stalowni i hut. Zakłady otrzymują od surowiec gwarantowanej jakości do wytwarzania nowych produktów, które następnie zyskują nowe życie w obiegu gospodarczym. Cała obsługa odbywa się w przyjaznych dla środowiska i certyfikowanych zakładach.";
        const szklo = "Mówi się, że szkło to najbardziej wdzięczny surowiec pod względem zdatności do recyklingu. Jego ponowne wykorzystanie jest nie tylko ekologiczne, ale i ekonomiczne. Przetworzone szkło nie traci na jakości – zachowuje swoje pierwotne właściwości oraz jest tak samo trwałe, jak wcześniej. Recykling szkła pozwala na zaoszczędzenie piasku kwarcowego i energii – stłuczka szklana topi się w niższej temperaturze niż pierwotny materiał. Produkcja szkła z recyklingu jest więc zwyczajnie tańsza i bardziej opłacalna. Niektóre legendy miejskie głoszą, że ponowne wykorzystanie szkła oznacza po prostu umycie go i wprowadzenie do obiegu, co budzi kontrowersje ze względu na higienę. Jest to oczywiście nieprawda. Zebrane szkło przeznaczone do recyklingu przerabia się na stłuczkę, którą można następnie przetopić na nowe opakowania.";
        const plastik = "Smutną prawdą jest to, że planeta staje się coraz bardziej zanieczyszczona przez tworzywa sztuczne. Butelki i plastikowe słomki pływające w oceanach to obraz, który widzieli wszyscy dzięki przekazom medialnym. Okres rozkładu plastiku jest niezwykle długi – foliowa reklamówka potrafi rozkładać się nawet 500 lat, przy okazji wydzielając do środowiska szkodliwy dla organizmów żywych mikro- i nanoplastik oraz inne toksyczne związki. Z tych względów recykling plastiku to temat, który spędza sen z oczu ekologom od wielu lat. Przetworzony plastik to surowiec, z którego można zrobić zarówno nowe opakowania, jak i odzież. Ponowne wykorzystywanie tworzyw sztucznych zapobiega ich nagromadzaniu w środowisku, dlatego tak ważne jest odpowiednie segregowanie odpadów. Plastik wyrzuca się do specjalnie przygotowanych żółtych kontenerów na śmieci. Najkorzystniejsze jest jednak ograniczanie jego zużycia wtedy, gdy jest to możliwe – na przykład poprzez zamianę foliowych reklamówek na materiałowe torby.";


            return(
                <>
                <Wrapper>
                    <h1>{title}</h1>
                    <Element>
                        <h2>Co to jest recykling w praktyce?</h2>
                        <p>{aboutRecycling}</p>
                    </Element>
                    <Element papier>
                        {/* <h2>Papier</h2> */}
                        <img src="https://cdn.glitch.me/63ef14e4-5717-448b-a738-3f19fc699bd0%2Fgazeta.png?v=1639049854958" alt="papier"/>
                        <p>{papier}</p>
                    </Element>
                    <Element metal>
                        <p>{metal}</p>
                        <img src="https://cdn.glitch.me/63ef14e4-5717-448b-a738-3f19fc699bd0%2Fpuszka.png?v=1639052273131" alt="metal"/>
                    </Element>
                    <Element szklo>
                        <img src="https://cdn.glitch.me/63ef14e4-5717-448b-a738-3f19fc699bd0%2Fbutelka%20szklana.png?v=1639051083588" alt="szklo"/>
                        <p>{szklo}</p>
                    </Element>
                    <Element plastik>
                        <p>{plastik}</p>
                        <img src="https://cdn.glitch.me/63ef14e4-5717-448b-a738-3f19fc699bd0%2Fbutelka%20plastikowa.png?v=1639051511060" alt="plastik"/>
                    </Element>
                </Wrapper>
                </>
            )
    }
}

export default Recykling;