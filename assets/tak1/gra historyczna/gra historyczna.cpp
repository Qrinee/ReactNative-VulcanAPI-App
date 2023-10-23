
#include "podgra.h"
#include "klasa2.h"
#include <iostream>
#include<windows.h>
#include<stdlib.h>
#include<time.h>
#include<cstdlib>
#include<cstdio>


using namespace std;


int main()
{
    
    HANDLE h = GetStdHandle(STD_OUTPUT_HANDLE);
  





    podgra po1;

    po1.animacjaladowania();
    po1.menupoczatku();
    
   
    wprowadzenie wp1;
    SetConsoleTextAttribute(h,4);
    wp1.cale();
    
   
    /*wp1.sprawdz();*/
    
  
  


    

   



    return 0;
}