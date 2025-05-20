# User Stories voor CodeCampus Dashboard

## Must-have User Stories

### User Story 1: Zoekfunctionaliteit

**Als gebruiker** wil ik **cursussen kunnen zoeken op titel of trefwoord** zodat ik **snel specifieke cursussen kan vinden zonder door de hele lijst te scrollen**.

**Acceptatiecriteria:**

- Er is een zoekbalk zichtbaar bovenaan het dashboard
- Bij het typen worden resultaten direct gefilterd (zonder pagina te verversen)
- Zoeken werkt op cursustitel en beschrijving
- Als er geen resultaten zijn, wordt een melding getoond
- De zoekfunctie werkt in combinatie met eventuele actieve filters

### User Story 2: Sorteeropties

**Als gebruiker** wil ik **cursussen kunnen sorteren op verschillende criteria** zodat ik **ze kan ordenen op een manier die voor mij relevant is**.

**Acceptatiecriteria:**

- Er is een dropdown menu met sorteeropties
- Cursussen kunnen gesorteerd worden op: populariteit, rating, duur
- De huidige sortering wordt visueel aangegeven
- Sortering werkt in combinatie met eventuele filters of zoekopdrachten

### User Story 3: Cursus details bekijken

**Als gebruiker** wil ik **op een cursus kunnen klikken voor meer informatie** zodat ik **een beter beeld krijg van de inhoud voordat ik de video bekijk**.

**Acceptatiecriteria:**

- Bij klikken op een cursuskaart verschijnt een modal of detailpagina
- De detailweergave toont uitgebreide beschrijving, leerdoelen, en andere relevante info
- Er is een knop om direct naar de video te gaan
- Er is een knop om terug te gaan naar het overzicht

### User Story 4: Filtering op categorieën

**Als gebruiker** wil ik **cursussen kunnen filteren op categorieën** zodat ik **alleen cursussen zie die relevant zijn voor een specifiek onderwerp**.

**Acceptatiecriteria:**

- Er is een sectie/component waar categorieën worden getoond
- Meerdere categorieën kunnen tegelijk geselecteerd worden
- Geselecteerde categorieën worden visueel gemarkeerd
- Bij selectie worden alleen relevante cursussen getoond
- Er is een optie om alle filters te wissen

## Should-have User Stories

### User Story 5: Favorieten markeren

**Als gebruiker** wil ik **cursussen kunnen markeren als favoriet** zodat ik **een persoonlijke collectie kan maken van cursussen die me interesseren**.

**Acceptatiecriteria:**

- Elke cursuskaart heeft een "favoriet" knop (bijv. ster-icoon)
- Favorieten worden opgeslagen in localStorage
- Er is een apart filter/tab om alleen favorieten te tonen
- Het aantal favorieten wordt getoond in de UI

### User Story 6: Gebruikersvoorkeuren opslaan

**Als gebruiker** wil ik **dat mijn filterinstellingen worden onthouden** zodat ik **niet telkens opnieuw mijn voorkeuren hoef in te stellen als ik terugkom**.

**Acceptatiecriteria:**

- Actieve filters worden opgeslagen in localStorage
- Bij terugkeer worden deze filters automatisch toegepast
- Er is een knop om alle opgeslagen voorkeuren te resetten
- Filtervoorkeuren worden alleen lokaal opgeslagen

### User Story 7: Responsive design verbetering

**Als mobiele gebruiker** wil ik **dat het dashboard optimaal werkt op mijn apparaat** zodat ik **gemakkelijk cursussen kan bekijken onderweg**.

**Acceptatiecriteria:**

- Dashboard schaalt correct op mobiele apparaten (smartphones en tablets)
- Navigatie-elementen transformeren naar een hamburgermenu op kleine schermen
- Touch-interacties zijn geoptimaliseerd voor mobiel gebruik
- Inhoudsweergave past zich aan voor optimale leesbaarheid op kleine schermen

## Could-have User Stories

### User Story 8: Dark mode

**Als gebruiker** wil ik **kunnen schakelen tussen light en dark mode** zodat ik **het dashboard kan bekijken op een manier die comfortabel is voor mijn ogen, vooral 's avonds**.

**Acceptatiecriteria:**

- Er is een schakelaar om tussen light en dark mode te wisselen
- De gekozen modus wordt opgeslagen en onthouden
- Alle elementen hebben aangepaste styling voor beide modi
- De modus-voorkeur respecteert de systeeminstelling als standaard

### User Story 9: Voortgang bijhouden

**Als gebruiker** wil ik **kunnen bijhouden welke cursussen ik heb bekeken** zodat ik **mijn leervoortgang kan volgen**.

**Acceptatiecriteria:**

- Bij elke cursus is een optie om deze te markeren als "bekeken"
- Bekeken cursussen krijgen een visuele indicator
- Er is een filter/tab om bekeken of onbekeken cursussen te tonen
- Voortgangsinformatie wordt lokaal opgeslagen

### User Story 10: Animaties toevoegen

**Als gebruiker** wil ik **subtiele animaties zien bij interacties** zodat **de gebruikerservaring rijker en intuïtiever aanvoelt**.

**Acceptatiecriteria:**

- Vloeiende overgangsanimaties bij filteren en sorteren
- Hover-effecten op klikbare elementen
- Laadanimaties tijdens het ophalen van data
- Animaties zijn subtiel en niet afleidend
- Animaties kunnen worden uitgeschakeld (voor toegankelijkheid)
