using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Dit is de plain text:
            String str = "Qci cu ssg jhhnzssyq jag ssg istui qcs hgyssuzaan cu wsfaati fsi zsxoyv jag uozuicioics. Qs ysiisnu cg qsms istui mcrg jsnjagwsg qhhn agqsns ysiisnu.Qhhn wsznoct is fatsg jag ssg dnsbosgicsiazsy tag rs qsms istui isnow yssuzaan fatsg. Mh tag rs qs fssui jhhnthfsgqs ysiisnu cg qsms istui jsnjagwsg qhhn qs fssui jhhnthfsgqs ysiisn            jhywsgu qs dnsbosgicsiazsy.Qs fssui jhhnthfsgqs ysiisn cg hgms iaay cu qs ‘s’.  Rs may mcsg qai rs ugsy ssg yssuzans istui ocithfi. Ssg zcrthfsgqs jnaaw jhhn qsms hvqnaexi cu, xhs tag rs qsms jhnf jag sgenpvics uisntsn fatsg? Qs dyaw qcs zcr qsms hvqnaexi xhhni cu { Avvsyfhsu}.";
            //variabele maken voor de output
            String decipher = "";
            //lengte van de text voor de for loop
            int lth = str.Length;
            //titel
            Console.WriteLine("Het oncijferen van een code:");
            //Het maken van een lijst waar alle letters in staan:
            //a = a; b = z; c = e; d = q; e = s; f = d; g = w; h = x; i = c; j = r; k = t; l = y; m = f; n = g; o = h; p = v; q = b; r = n; s = u; t = i; u = o; v = j; y = p; z = m

            //Door de text gaan om te kijken hoevaak welke letter is gebruikt. (met een for loop)
            //deze for loop blijft gaan tot er geen letters meer over zijn in de text.
            for(int i = 0; i >= lth; i++)
            {
                //checkt hier of de letter gelijk is aan a
                if(str.Substring(i) == "a")
                {
                    //voegt een letter a toe direct na het laatste symbool in de variabele decipher
                    decipher += "a";
                }
                else if(str.Substring(i) == "b")
                {
                    decipher += "z";
                }
                else if (str.Substring(i) == "c")
                {
                    decipher += "e";
                }
                else if (str.Substring(i) == "d")
                {
                    decipher += "q";
                }
                else if (str.Substring(i) == "e")
                {
                    decipher += "s";
                }
                else if (str.Substring(i) == "f")
                {
                    decipher += "d";
                }
                else if (str.Substring(i) == "g")
                {
                    decipher += "w";
                }
                else if (str.Substring(i) == "h")
                {
                    decipher += "x";
                }
                else if (str.Substring(i) == "i")
                {
                    decipher += "c";
                }
                else if (str.Substring(i) == "j")
                {
                    decipher += "r";
                }
                else if (str.Substring(i) == "k")
                {
                    decipher += "t";
                }
                else if (str.Substring(i) == "l")
                {
                    decipher += "y";
                }
                else if (str.Substring(i) == "m")
                {
                    decipher += "f";
                }
                else if (str.Substring(i) == "n")
                {
                    decipher += "g";
                }
                else if (str.Substring(i) == "o")
                {
                    decipher += "h";
                }
                else if (str.Substring(i) == "p")
                {
                    decipher += "v";
                }
                else if (str.Substring(i) == "q")
                {
                    decipher += "b";
                }
                else if (str.Substring(i) == "r")
                {
                    decipher += "n";
                }
                else if (str.Substring(i) == "s")
                {
                    decipher += "u";
                }
                else if (str.Substring(i) == "t")
                {
                    decipher += "i";
                }
                else if (str.Substring(i) == "u")
                {
                    decipher += "o";
                }
                else if (str.Substring(i) == "v")
                {
                    decipher += "j";
                }
                else if (str.Substring(i) == "w")
                {
                    decipher += "w";
                }
                else if (str.Substring(i) == "x")
                {
                    decipher += "x";
                }
                else if (str.Substring(i) == "y")
                {
                    decipher += "p";
                }
                else if (str.Substring(i) == "z")
                {
                    decipher += "m";
                }
                else if (str.Substring(i) == " ")
                {
                    decipher += " ";
                }

                //Output:
                Console.Write(decipher);
                //Om het programma open te houden:
                Console.Read();
            }
        }
    }
}
