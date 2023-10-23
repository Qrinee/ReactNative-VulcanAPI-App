#include"podgra.h"
#include <iostream>
#include<windows.h>
#include<stdlib.h>
#include<time.h>
#include<cstdlib>
#include "klasa2.h"


using namespace std;

podgra::podgra(int aa, int bb, int cc, int dd)
{

	a = aa;
	b = bb;
	c = cc;
	d = dd;



}
void podgra::animacjaladowania()
{

	system("cls");
	system("Color D");

	cout << "\n\n\n\n\n\n\n\n\n\n\n";
	cout << "\t\t\t\t\tLoading";
	char x = 219;
	cout << x;

	for (int i = 0; i < 35; i++)
	{
		cout << x;
		if (i < 10)
			Sleep(300);
		if (i >= 10 && i < 20)
			Sleep(150);
		if (i >= 10)
			Sleep(25);

	}

	



}






void podgra::menupoczatku()
{

	

	system("cls");

	cout << R"(
.__                                       __              _____      .___                                   __    .__ 
|  |__    ____  _____   _______   _______/  |_    ____  _/ ____\   __| _/  _____    ____  __  _  __  ______|  | __|__|
|  |  \ _/ __ \ \__  \  \_  __ \ /  ___/\   __\  /  _ \ \   __\   / __ |  /     \  /  _ \ \ \/ \/ / /  ___/|  |/ /|  |
|   Y  \\  ___/  / __ \_ |  | \/ \___ \  |  |   (  <_> ) |  |    / /_/ | |  Y Y  \(  <_> ) \     /  \___ \ |    < |  |
|___|  / \___  >(____  / |__|   /____  > |__|    \____/  |__|    \____ | |__|_|  / \____/   \/\_/  /____  >|__|_ \|__|
     \/      \/      \/              \/                               \/       \/                       \/      \/      
)" << '\n';




	cout << R"( 
  ____    ________                  __ 
/_   |    /  _____/___________      |__|
 |   |   /   \  __\_  __ \__  \     |  |
 |   |   \    \_\  \  | \// __ \_   |  |
 |___| /\ \______  /__|  (____  /\__|  |
       \/        \/           \/\______|
)" << '\n';
	cout << R"(
________                     __                       
\_____  \     _____   __ ___/  |_  ___________________
 /  ____/     \__  \ |  |  \   __\/  _ \_  __ \___   /
/       \      / __ \|  |  /|  | (  <_> )  | \//    / 
\_______ \ /\ (____  /____/ |__|  \____/|__|  /_____ \
        \/ \/      \/                               \/


 

)" << '\n';
	int l;
	cin >> l;
	wybór(l);
}

void podgra::data()
{
	system("cls");

	system("Color D");



	cout << "\n\n\n\n\n\n\n\n\n\n\n";
	cout << "\t\t\t\t\t\t";

	for (int i = 1; i <= 1; i++)
	{
		cout << a;
		if (i < 10)
			Sleep(300);
		cout << b;
		if (i < 10)
			Sleep(300);
		cout << c;
		if (i < 10)
			Sleep(300);
		cout << d;

	}
}
void podgra::wybór(int x)
{
	if (x == 1)
	{

		podgra::data();

	}
	else if(x==2)
	{

		podgra::autorzy();
	}
	
	

}
void podgra::autorzy()
{
	system("cls");
	cout << R"(
  ___  _____   __     _      _        _      ____       _                   
 |   \| __\ \ / /  _ | |__ _| |___  _| |__  |_  /  _ __| |_                 
 | |) | _| \ V /  | || / _` | / / || | '_ \  / / || / _| ' \                
 |___/|___| \_/    \__/\__,_|_\_\\_,_|_.__/ /___\_, \__|_||_|               
     
     )" << '\n';
	cout << R"(
  ___ _   ___   __  __                 _   ___  |__/             _      _   
 | __/_\ | _ ) |  \/  |__ _ _ _ __ ___| | | _ \__ _ __ _  _ _ _ (_)__ _| |__
 | _/ _ \| _ \ | |\/| / _` | '_/ _/ -_) | |  _/ _` / _| || | ' \| / _` | / /
 |_/_/ \_\___/ |_|  |_\__,_|_| \__\___|_| |_| \__,_\__|\_, |_||_|_\__,_|_\_\
                                                       |__/                 
)" << '\n' << endl << endl << endl << endl << endl << endl << endl << endl << endl << endl << endl << endl << endl << endl << endl;

	cin.ignore();
	cout << "kliknij enter zeby wrocic........";
	cin.get();
	
	podgra::menupoczatku();

	



}










/*----------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
void wprowadzenie::ramka()
{


	cout << R"(========================================================================================================================
========================================================================================================================
               )" << '\n';

	
	





}
void wprowadzenie::pierwszyb()

{
	
	cout << "1 Wrzesnia 3 rzesza atakuje cie na polwyspie westerplatte,oznacza to jednoglosnie wojne.Francja obicala wspraci podczas ataku nie przyjaciela,zostaly wymitowane ogloszenia radiowe,wezwano mezczyzn z kategori A  " << endl << endl << endl << endl << endl;

}
void wprowadzenie::pytania()
{
	cout << "1 Postaw sie wrogowi i zwroc sie o pomoc ligi narodow" << endl;
	cout << "2.Poddaj sie okupacji i odezwij się do naczelnego wodza 3 rzeszy" << endl;
	cout << "3.Zwroc sie o pomoc do ZSRS " << endl;
	cin >> a;




}
void wprowadzenie::cale()
{
	system("cls");
	wprowadzenie::hi();
	wprowadzenie::ramka();
	wprowadzenie::pierwszyb();
	wprowadzenie::ramka();
	wprowadzenie::pytania();
	wprowadzenie::ramka();




}
void wprowadzenie::hi()
{

	cout << "\t\t\t\t\t\t" << R"(
                      |        |  ------------\    ,---.  /------------  |        |
                      |        |   ---------.  `-./  "\.-'  .---------   |        |
                      |  ,--.  |     --------\   .         /--------     |  ,--.  |
                      | ( >< ) |        ------`-.|      .-'------        | ( >< ) |
                      |  `--'  |             ---/ `/"\  \---             |  `--'  |
                      |      . |                `//_-_\\'                |        |
                      | : .  ! |                (.'   ',)                | . : . :|
                      | ! ! .| |                                         | : | ! .|
                      | |_| ;|_|                  .                      |_| !_| !|
                       `-' `-^'                     \o                      `-' `-^'
                                 \__________________T>_________________/
                                 `-=--=--=--=--=--=---=--=--=--=--=--=-'
                                   ] _] _] _] _] _] _L] _] _] _] _] _] _
                                  `-------------------------------------'
                                  `u---u---u---u---u---u---u---u---u---u'
)" << '\n';
}

/*
void wprowadzenie::sprawdz()
{

	switch (a)
	{
	case 1:
		p1::wyb11();

		break;
		
	case 2:
		p2::wyb12();

		break;
	case 3:
		p3::wyb13();

		break;
	}
	


};
*/



