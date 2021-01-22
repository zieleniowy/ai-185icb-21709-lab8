# ai-185icb-ai-lab8
## chat z użyciem protokołu websocket oraz webworkery

Opisy są w tytułach zdjęć - należy najeżdżać na zdjęcia po kolei. W rzeczywistej produkcji, tego typu czaty powinny korzystać z techniki wirtualizacji (przechowywania w drzewie DOM jedynie widocznych wiadomości), aby zwiększyć wydajność, jednak nie o to chodziło w tym ćwiczeniu. 

![alt text](public/1.png "Aby utworzyć nowy pokój należy wpisać jego nazwę do odpowiedniego guzika i zatwierdzić enterem")
![alt text](public/2.png "Pokój od razu pojawia się na liście pokoi u wszystkich użytkowników")
![alt text](public/3.png "Aby zmienić pokój, należy kliknąć jego nazwę na liście")
![alt text](public/4.png "Wysyłane wiadomości nie pojawiają się u osób w innych pokojach")
![alt text](public/5.png "Wiadomości pojawiają się, gdy użytkownicy są w tym samym pokoju, wysłane przez innych są niebieskie, a u wysyłającego są zielone")
![alt text](public/6.png "W tle czatu (osobny proces) działa skrypt (webworker), który mierzy czas na stronie i dokonuje pewnych skomplikowanych obliczeń, aby pobrać wynik skryptu należy kliknąć PPM w dowolnym miejscu na stronie")