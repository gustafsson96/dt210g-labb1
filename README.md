# Laboration 1 DT210G

Den här laborationen har gått ut på att bekanta sig med JavaScript-biblioteket React genom att skapa en enkel webbplats bestående av titel, banner och minst tre objekt baserade på valfritt fritidsintresse. Webbplatsen har delats upp i lämpliga komponenter och använder map() för att iterera över objekten, props för att presentera titel, en conditional operator för att skriva ut text baserat på boolean och en kombination av inline CSS och CSS med stilmall. 

Länk till den publicerade webbplatsen: [Övningsbank]()

## Använda tekniker
* **React:** JavaScript-bibliotek för skapandet av lämpliga komponenter och dynamiskt innehåll.
* **TypeScript:** Programmeringsspråk med statisk typning.
* **Vite:** Utvecklings- och byggverktyg.
* **TSX:** Syntax som möjliggör kombinationen av HTML-liknande kod och TypeScript i komponenter.
* **Props:** Indata som skickas från App.tsx till Header.tsx för att presentera titel dynamiskt. 
* **map():** Iterera över objekten i arrayen exerciseArr i komponenten ExerciseBankSection och läs ut till skärmen. Unikt index för föremål i arrayen används som key. 
* **Conditional operator:** Villkor för att presentera "ja" eller "nej" baserat på boolean i komponenten ExerciseCard.
* **CSS:** För styling, både inline och i stilmall för att testa olika metoder.
* **Netlify:** För publicering. 

## Skapade komponenter
* **Header:** Header som innehåller banner bild och titel. Stylad med inline CSS. 
* **ExerciseBankSection:** Huvudinnehåll med kort som presenterar övningar som man kan göra på gymmet. Stylad med komponentspecifik stilmall. 
* **ExerciseCard:** Ett enskilt kort för en övning med namn, rekommenderade set och reps, muskelgrupp och om övningen kräver utrustning eller inte. Stylad med komponentspecifik stilmall. 
* **Footer:** Webbplatsens footer. Stylad med inline CSS. 




