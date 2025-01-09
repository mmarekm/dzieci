namespace KapitanFlip
{
    public class Gracz
    {
        public string Nazwa { get; set; }
        public int Punkty { get; set; }
        public int PunktyZPlanszy { get; set; }
        public bool PosiadaczMapy { get; set; }
        public Dictionary<(int x, int y), PozycjaPlytki> Plansza { get; set; }
        public Dictionary<(int x, int y), PozycjaPlytki> PlanszaA { get; set; }
        public Dictionary<(int x, int y), PozycjaPlytki> PlanszaB { get; set; }
        public Dictionary<(int x, int y), PozycjaPlytki> PlanszaC { get; set; }
        public Dictionary<(int x, int y), PozycjaPlytki> PlanszaD { get; set; }
        public Dictionary<(int x, int y), PozycjaPlytki> PlanszaE { get; set; }
        public int[,] TablicaPlansza { get; set; }
        public int Szczyty { get; set; }
        public Gracz(string nazwa)
        {
            Nazwa = nazwa;
            Szczyty = 0;
            Punkty = 0;
            PosiadaczMapy = false;
            Plansza = new Dictionary<(int x, int y), PozycjaPlytki> { };
            PlanszaA = new Dictionary<(int x, int y), PozycjaPlytki>
            {
                {(1,1), null}, {(1,2), null},
                {(2,1), null}, {(2,2), null}, {(2,3), null},
                {(3,1), null}, {(3,2), null}, {(3,3), null}, {(3,4), null}, {(3,5), null},
                {(4,3), null}, {(4,4), null},
                {(5,1), null}, {(5,2), null}, {(5,3), null}
            };
            PlanszaB = new Dictionary<(int x, int y), PozycjaPlytki>
            {
                {(1,1), null}, {(1,2), null},
                {(2,1), null}, {(2,2), null}, {(2,3), null},
                {(3,1), null}, {(3,2), null}, {(3,3), null}, {(3,4), null}, {(3,5), null},
                {(4,1), null},
                {(5,1), null}, {(5,2), null}, {(5,3), null}, {(5,4), null}
            };
            PlanszaC = new Dictionary<(int x, int y), PozycjaPlytki>
            {
                {(1,1), null}, {(1,2), null}, {(1,3), null},
                {(2,1), null}, {(2,2), null}, {(2,3), null},
                {(3,1), null}, {(3,2), null},
                {(4,1), null}, {(4,2), null}, {(4,3), null}, {(4,4), null}, {(4,5), null},
                {(5,1), null}, {(5,2), null}
            };
            PlanszaD = new Dictionary<(int x, int y), PozycjaPlytki>
            {
                {(1,2), null}, {(1,3), null}, {(1,4), null},
                {(2,1), null}, {(2,2), null}, {(2,3), null}, {(2,4), null},
                {(3,1), null}, {(3,2), null}, {(3,3), null}, {(3,4), null}, {(3,5), null},
                {(4,3), null}, {(4,4), null},
                {(5,3), null}
            };
            PlanszaE = new Dictionary<(int x, int y), PozycjaPlytki>
            {
                {(1,1), null}, {(1,2), null}, {(1,3), null}, {(1,4), null},
                {(2,1), null}, {(2,2), null},
                {(3,1), null}, {(3,2), null}, {(3,3), null},
                {(4,1), null}, {(4,2), null}, {(4,3), null},
                {(5,2), null}, {(5,3), null}, {(5,4), null}
            };
            TablicaPlansza = new int[5, 5];
            for (int i = 0; i < 5; i++)
            {
                for (int j = 0; j < 5; j++)
                {
                    TablicaPlansza[i, j] = 0;
                }
            }
        }
        public int SumaKoncowych() => KoncoweBocianieGniazdo() + KoncoweCiesli() + KoncoweMajtek() + KoncowePapugi();
        public int SumaKoncowychPlanszy3() => SumaKoncowych() + KoncowePlansza3Kolumna2() + KoncowePlansza3Kolumna4();
        public int LiczyRoznych() => Enumerable.Range(0, 5).Select(i => TablicaPlansza[2, i]).Distinct().Count();
        public int KoncoweBocianieGniazdo()
        {
            int naBocianimGniezdzie = 0;
            for (int i = 0; i < 5; i++)
            {
                for (int j = 0; j < 5; j++)
                {
                    if (TablicaPlansza[i, j] == 1)
                    {
                        bool brakMarynarza = true;
                        if (j < 4)
                        {
                            for (int k = j + 1; k < 5; k++)
                            {
                                if (TablicaPlansza[i, k] != 0)
                                {
                                    brakMarynarza = false;
                                }
                            }
                        }
                        if (brakMarynarza)
                        {
                            naBocianimGniezdzie++;
                        }
                    }
                }
            }
            return 4 * naBocianimGniezdzie;
        }
        public int KoncoweCiesli()
        {
            int zliczaczCiesli = 0;
            for (int i = 0; i < 5; i++)
            {
                for (int j = 0; j < 5; j++)
                {
                    if (TablicaPlansza[i, j] == 3)
                    {
                        bool brakPirata = true;
                        for (int k = 0; k < 5; k++)
                        {
                            if (TablicaPlansza[i, k] == 2 || TablicaPlansza[k, j] == 2)
                            {
                                brakPirata = false;
                            }
                        }
                        if (brakPirata)
                        {
                            zliczaczCiesli++;
                        }
                    }
                }
            }
            return 3 * zliczaczCiesli;
        }
        public int KoncoweMajtek()
        {
            int zliczaczMajtkow = 0;
            for (int i = 0; i < 5; i++)
            {
                for (int j = 0; j < 5; j++)
                {
                    if (TablicaPlansza[i, j] == 6)
                    {
                        zliczaczMajtkow++;
                        break;
                    }
                }
            }
            return (int)Math.Pow(zliczaczMajtkow, 2);
        }
        public int KoncowePapugi()
        {
            int zliczaczPapug = 0;
            for (int i = 0; i < 5; i++)
            {
                for (int j = 0; j < 5; j++)
                {
                    if (TablicaPlansza[i, j] == 9)
                    {
                        zliczaczPapug++;
                    }
                }
            }
            return -zliczaczPapug;
        }
        public int KoncowePlansza3Kolumna2()
        {
            bool takieSame = false;
            if (TablicaPlansza[1, 0] != 0)
            {
                if (TablicaPlansza[1, 0] == TablicaPlansza[1, 1] && TablicaPlansza[1, 0] == TablicaPlansza[1, 2])
                    takieSame = true;
            }
            if (!takieSame)
                return 0;
            else
                return 6;
        }
        public int KoncowePlansza3Kolumna4()
        {
            bool rozne = false;
            if (TablicaPlansza[3, 4] != 0)
            {
                if (TablicaPlansza[3, 0] != TablicaPlansza[3, 1] && TablicaPlansza[3, 0] != TablicaPlansza[3, 2] && TablicaPlansza[3, 0] != TablicaPlansza[3, 3] && TablicaPlansza[3, 0] != TablicaPlansza[3, 4] &&
                    TablicaPlansza[3, 1] != TablicaPlansza[3, 2] && TablicaPlansza[3, 1] != TablicaPlansza[3, 3] && TablicaPlansza[3, 1] != TablicaPlansza[3, 4] &&
                    TablicaPlansza[3, 2] != TablicaPlansza[3, 3] && TablicaPlansza[3, 2] != TablicaPlansza[3, 4] &&
                    TablicaPlansza[3, 3] != TablicaPlansza[3, 4])
                    rozne = true;
            }
            if (!rozne)
                return 0;
            else
                return 4;
        }
        public string KomentarzBombardiera() => ZaDuzoBombardierow() ? "BUUUM" : "spokój";
        public int OstatecznePunkty()
        {
            if (ZaDuzoBombardierow())
            {
                return 0;
            }
            else
            {
                return Punkty + SumaKoncowych();
            }
        }
        public int OstatecznePunktyPlanszy3()
        {
            if (ZaDuzoBombardierow())
            {
                return 0;
            }
            else
            {
                return Punkty + SumaKoncowychPlanszy3();
            }
        }
        public bool ZaDuzoBombardierow()
        {
            bool zerowanie = false;
            int zliczaczBombardierow = 0;
            for (int i = 0; i < 5; i++)
            {
                for (int j = 0; j < 5; j++)
                {
                    if (TablicaPlansza[i, j] == 2)
                    {
                        zliczaczBombardierow++;
                    }
                }
            }
            if (zliczaczBombardierow >= 3)
            {
                zerowanie = true;
            }
            return zerowanie;
        }
        public string ZMapa => PosiadaczMapy ? "MAPA" : "";
        public string Interpunkcja => ZaDuzoBombardierow() ? "..." : "!";
    }
}
