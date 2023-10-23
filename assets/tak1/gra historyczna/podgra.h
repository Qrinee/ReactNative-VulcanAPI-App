#pragma once
#include <iostream>

#include "klasa2.h"
#include <windows.h>

class podgra
{
	
	int a, b, c, d;
public:
	void menupoczatku();
	void animacjaladowania();
	void data();
	void wybór(int x);
	void autorzy();
	podgra(int aa=1, int bb=9, int cc=3, int dd=9);

};


class wprowadzenie /* : public p1, p2, p3*/
{
	int a;
    public:
	void ramka();   
	void hi();
	void pierwszyb();
	void pytania();
	void cale();
	/*void sprawdz();*/

};





