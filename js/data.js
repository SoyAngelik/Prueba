/**
 * interventionData--
 * * Esta matriz contiene todos los datos para el Plan de Intervenciones para la Prevención de la DNTc.
 * Cada objeto en la matriz representa una etapa del ciclo de vida (ej. Preconcepción, Embarazo).
 * * Estructura de cada objeto de sección:
 * - id: Un identificador único para la sección, usado para los IDs de HTML.
 * - title: El título visible de la sección (ej. "Preconcepción").
 * - icon: El código SVG para el ícono de la sección.
 * - iconBg: La clase de Tailwind CSS para el color de fondo del ícono.
 * - borderColor: La clase de Tailwind CSS para el color del borde de las tarjetas de evidencia.
 * - interventions: Una matriz de objetos, donde cada objeto es una intervención específica.
 * * Estructura de cada objeto de intervención:
 * - title: El título de la intervención (ej. "Planificación familiar").
 * - responsibles: Una cadena de texto con las entidades responsables.
 * - evidence: Una matriz de objetos, donde cada objeto representa una pieza de evidencia científica.
 * * Estructura de cada objeto de evidencia:
 * - text: El texto que resume la evidencia.
 * - source: La cita o fuente bibliográfica completa, puede incluir HTML para saltos de línea.
 */
const interventionData = [
    {
        id: "preconcepcion",
        title: "Preconcepción",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ec4899" viewBox="0 0 256 256"><path d="M172,56a4,4,0,0,1,4,4V88h24a4,4,0,0,1,0,8H176v24a4,4,0,0,1-8,0V96H144a4,4,0,0,1,0-8h24V60A4,4,0,0,1,172,56Zm63.76,96.69-52-32A8,8,0,0,0,176,128v64a8,8,0,0,0,7.76,7.95l52-8a8,8,0,0,0,7.84-9.26ZM184,181.35V135.21l37.8,23.23ZM92,120a60,60,0,1,0-60,60A60.07,60.07,0,0,0,92,120Zm0,104a44,44,0,1,1,44-44A44.05,44.05,0,0,1,92,224Z"></path></svg>',
        iconBg: "bg-pink-100",
        borderColor: "border-pink-500",
        interventions: [
            {
                title: "Planificación familiar",
                responsibles: "Salud, Inclusión Social y Familia, Juventud, Comunicaciones, Educación, De las Mujeres",
                evidence: [
                    {
                        text: "El embarazo adolescente eleva riesgos de bajo peso al nacer, anemia y mortalidad materno-infantil, por la competencia nutricional entre madre y feto. La planificación familiar es clave para prevenir estas complicaciones.",
                        source: "Black, R.E., Victora, C.G., Walker, S.P., Bhutta, Z.A., … the Maternal and Child Nutrition Study Group. (2013). Maternal and Child Nutrition 1: Maternal and child undernutrition and overweight in low-income and middle-income countries. Lancet. Available at http://dx.doi.org/10.1016/S0140-6736(13)60937-X. <br>Gigante, D.P., Rasmussen, K.M. & Victora, C.G. 2005. Pregnancy increases BMI in adolescents of a population-based birth cohort. Journal of Nutrition, Volume 135:74–80"
                    },
                    {
                        text: "Los intervalos cortos entre nacimientos afectan la nutrición materno-infantil, aumentando riesgos de parto prematuro, bajo peso y anemia. Promover la planificación familiar favorece un espaciamiento saludable entre hijos.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2). <br>Black, R.E., Victora, C.G., Walker, S.P., Bhutta, Z.A., … the Maternal and Child Nutrition Study Group. (2013). Maternal and Child Nutrition 1: Maternal and child undernutrition and overweight in low-income and middle-income countries. Lancet. Available at http://dx.doi.org/10.1016/S0140-6736(13)60937-X"
                    },
                    {
                        text: "Realizar actividades de educación sexual y reproductiva.",
                        source: "OMS. (2018d). Guideline: implementing effective actions for improving adolescent nutrition. Recuperado de https://www.who.int/nutrition/publications/guidelines/effective-actions-improving-adolescent/en/"
                    }
                ]
            },
            {
                title: "Fortalecimiento nutricional y entrega de micronutrientes",
                responsibles: "Inclusión Social y Familia, Juventud, Educación",
                evidence: [
                    {
                        text: "Reduce en un 27% el riesgo de padecer anemia.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    },
                    {
                        text: "Mejora significativamente el peso al nacer. Reduce en un 79% la incidencia de anemia megaloblástica.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    },
                    {
                        text: "Biofortificación de la harina y el trigo con hierro y ácido fólico, suplementación diaria de hierro y uso de micronutrientes en polvo para agregar a las comidas",
                        source: "OMS. (2018d). Guideline: implementing effective actions for improving adolescent nutrition. Recuperado de https://www.who.int/nutrition/publications/guidelines/effective-actions-improving-adolescent/en/."
                    },
                    {
                        text: "La alimentación escolar y acciones complementarias mejoran resultados educativos y cognitivos, generando impactos nutricionales positivos sostenibles y beneficios intergeneracionales. Estas intervenciones contribuyen a romper ciclos de desnutrición y pobreza.",
                        source: "Bundy, D., Burbano, C., Grosh, M., Gelli, A., Jukes, M. & Drake, L. (2009). Rethinking school feeding: Social safety nets, child development, and the education  sector. The World Bank. Washington D.C"
                    },
                    {
                        text: "Cuando los programas se enfocan en niños con muy alta inseguridad alimentaria, los efectos sobre medidas antropométricas son limitados, según evidencia disponible.",
                        source: "Ruel, M., Alderman, H., & Maternal and Child Nutrition Study Group. (2013). Nutrition-sensitive interventions and programmes: how can they help to accelerate progress in improving maternal and child nutrition? The Lancet, 382, 536–551."
                    },
                    {
                        text: "Las comidas escolares no impactan significativamente la estatura, y el aumento de peso puede ser beneficioso o riesgoso según el contexto. En países de ingreso medio, programas adaptados también buscan prevenir obesidad.",
                        source: "Ruel, M., Alderman, H., & Maternal and Child Nutrition Study Group. (2013). Nutrition-sensitive interventions and programmes: how can they help to accelerate progress in improving maternal and child nutrition? The Lancet, 382, 536–551."
                    },
                    {
                        text: "En Burkina Faso y Uganda, las comidas escolares y raciones para llevar mejoraron peso en menores de 5 años, inscripción escolar, asistencia, capacidades cognitivas y retrasaron la edad del primer embarazo.",
                        source: "Bundy, D., Burbano, C., Grosh, M., Gelli, A., Jukes, M. & Drake, L. (2009). Rethinking school feeding: Social safety nets, child development, and the education  sector. The World Bank. Washington D.C"
                    },
                    {
                        text: "Los programas de alimentación escolar fortalecen la nutrición con hierro, especialmente en adolescentes. Tres de cuatro estudios muestran que comidas escolares ricas en hierro mejoran las reservas de hierro, sin importar el estado inicial.",
                        source: "Ruel, M., Alderman, H., & Maternal and Child Nutrition Study Group. (2013). Nutrition-sensitive interventions and programmes: how can they help to accelerate progress in improving maternal and child nutrition? The Lancet, 382, 536–551."
                    },
                    {
                        text: "En India, micronutrientes en comidas escolares mejoraron el hierro total, pero no la anemia, posiblemente por parásitos. Incluir desparasitación en programas de salud escolar amplía beneficios a niños de todas las edades.",
                        source: "Ruel, M., Alderman, H., & Maternal and Child Nutrition Study Group. (2013). Nutrition-sensitive interventions and programmes: how can they help to accelerate progress in improving maternal and child nutrition? The Lancet, 382, 536–551."
                    }
                ]
            },
            {
                title: "Cuidado Psicosocial para evitar embarazo temprano",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De la Mujer, Gerencia de la U.A.E Buen Comienzo, Juventud, Educación",
                evidence: [
                    {
                        text: "Cuidado Psicosocial reduce en un 37% el riesgo de un segundo embarazo.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    }
                ]
            },
            {
                title: "Estrategias de educación alimentaria y nutricional",
                responsibles: "Salud, Inclusión Social y Familia, Juventud, Comunicaciones, Educación, De las Mujeres, Gerencia de la U.A.E, Buen Comienzo",
                evidence: [
                    {
                        text: "Intervenciones en escuelas, lugares de trabajo y comunidades impactan la nutrición. En escuelas, actitudes y hábitos previos median resultados. En el trabajo, campañas educativas reducen ausentismo y fomentan el consumo de alimentos saludables.",
                        source: "Hawkes, C. (2013). Promoting healthy diets through nutrition education and changes in the food environment: an international review of actions and their effectiveness.. Recuperado de www.fao.org/ag/humannutrition/nutritioneducation/69725/en/"
                    }
                ]
            }
        ]
    },
    {
        id: "embarazo",
        title: "Embarazo",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#14b8a6" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128ZM168,128a40,40,0,1,0-40,40A40.05,40.05,0,0,0,168,128Z"></path></svg>',
        iconBg: "bg-teal-100",
        borderColor: "border-teal-500",
        interventions: [
            {
                title: "Oportunidad en el inicio del control prenatal",
                responsibles: "Salud, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "Los servicios prenatales, de parto y postnatales ofrecen intervenciones nutricionales clave: consejería, prevención y tratamiento de enfermedades, pinzamiento oportuno del cordón para prevenir deficiencia de hierro y cuidado madre canguro.",
                        source: "Girard, A.W. & Olude, O. 2012. Nutrition education and counseling provided during pregnancy: Effects on maternal, neonatal and child health outcomes. Paediatric and Perinatal Epidemiology, Volume 26(Suppl. 1):191–204., <br>Deribew, A., Alemseged, F., Tessema, F., Sena, L., Birhanu, Z., Zeynudin, A., Sudhakar, M., Abdo, N., Deribe, K. & Biadgilign, S. 2010. Malaria and Under-Nutrition: A Community Based Study Among Under-Five Children at Risk of Malaria, South-West Ethiopia. PLOS ONE, Volume 5(5):e10775. Available at http://journals.plos.org/plosone/article/asset?id=10.1371/journal.pone.0010775.PDF. <br>Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    }
                ]
            },
            {
                title: "Asistencia a mínimo 4 controles prenatales",
                responsibles: "Salud, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "Los servicios prenatales, de parto y postnatales permiten intervenciones nutricionales esenciales: consejería alimentaria, prevención y tratamiento de enfermedades, pinzamiento oportuno del cordón para prevenir deficiencia de hierro y cuidado madre canguro.",
                        source: "Girard, A.W. & Olude, O. 2012. Nutrition education and counseling provided during pregnancy: Effects on maternal, neonatal and child health outcomes. Paediatric and Perinatal Epidemiology, Volume 26(Suppl. 1):191–204., <br>Deribew, A., Alemseged, F., Tessema, F., Sena, L., Birhanu, Z., Zeynudin, A., Sudhakar, M., Abdo, N., Deribe, K. & Biadgilign, S. 2010. Malaria and Under-Nutrition: A Community Based Study Among Under-Five Children at Risk of Malaria, South-West Ethiopia. PLOS ONE, Volume 5(5):e10775. Available at http://journals.plos.org/plosone/article/asset?id=10.1371/journal.pone.0010775.PDF. <br>Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    }
                ]
            },
            {
                title: "Acceso a micronutrientes esenciales en embarazo",
                responsibles: "Salud, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "Mejora significativamente el peso al nacer. Reduce en un 79% la incidencia de anemia megaloblástica",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    },
                    {
                        text: "11% a 13% de reducción de bajo peso para la edad gestacional y baja talla del neonato.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    },
                    {
                        text: "70% de reducción de la anemia al finalizar el embarazo. 67% de reducción de la anemia por deficiencia de hierro. 19% de reducción en la incidencia de bajo peso al nacer.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    },
                    {
                        text: "35% de reducción de la incidencia de la hipertensión durante el embarazo. 55% de reducción de la preeclampsia. 24% de reducción en los nacimientos pre-término.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    },
                    {
                        text: "32% de reducción de la incidencia de bajo peso para la edad gestacional. 45% de reducción de la tasa de muerte fetal/nacido muerto.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    }
                ]
            }
        ]
    },
    {
        id: "nacimiento",
        title: "Nacimiento",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0ea5e9" viewBox="0 0 256 256"><path d="M224,177.34a8,8,0,0,1-8,8H40a8,8,0,0,1-6.4-12.8l24-32A8,8,0,0,1,64,136H72a32,32,0,0,0,32-32,8,8,0,0,1,16,0,32,32,0,0,0,32,32h8a8,8,0,0,1,6.4,3.2l24,32A8,8,0,0,1,224,177.34Z"></path></svg>',
        iconBg: "bg-sky-100",
        borderColor: "border-sky-500",
        interventions: [
            {
                title: "Prevención Riesgo Nutricional Durante el Embarazo",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "Los servicios prenatales, de parto y postnatales ofrecen consejería nutricional, prevención y tratamiento de enfermedades, pinzamiento oportuno del cordón para prevenir deficiencia de hierro, y cuidado madre canguro para mejorar la salud materno-infantil.",
                        source: "Girard, A.W. & Olude, O. 2012. Nutrition education and counseling provided during pregnancy: Effects on maternal, neonatal and child health outcomes. Paediatric and Perinatal Epidemiology, Volume 26(Suppl. 1):191–204., <br>Deribew, A., Alemseged, F., Tessema, F., Sena, L., Birhanu, Z., Zeynudin, A., Sudhakar, M., Abdo, N., Deribe, K. & Biadgilign, S. 2010. Malaria and Under- Nutrition: A Community Based Study Among Under-Five Children at Risk of Malaria, South-West Ethiopia. PLOS ONE, Volume 5(5):e10775. Available at http://journals.plos.org/plosone/article/asset?id=10.1371/journal.pone.0010775.PDF. <br>Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    }
                ]
            },
            {
                title: "Inclusión de temas de lactancia en atención prenatal",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "Incluir lactancia materna y ablactación en la atención prenatal previene desnutrición crónica infantil. Prácticas inadecuadas aumentan deficiencias nutricionales. La nutrición materna durante la lactancia es clave para la calidad de la leche y la salud del lactante.",
                        source: "Scherbaum, V., & Srour, M. L. (2016). The Role of Breastfeeding in the Prevention of Childhood Malnutrition. World review of nutrition and dietetics, 115, 82–97. https://doi.org/10.1159/000442075 <br>Carretero-Krug, A., Montero-Bravo, A., Morais-Moreno, C., Puga, A. M., Samaniego-Vaesken, M. L., Partearroyo, T., & Varela-Moreiras, G. (2024). Nutritional Status of Breastfeeding Mothers and Impact of Diet and Dietary Supplementation: A Narrative Review. Nutrients, 16(2), 301. https://doi.org/10.3390/nu16020301, Vargas-Calle, A. M., & Corella-Galarza, C. A. (2020). Ablactación errónea y sus efectos en la desnutrición crónica. Dominio de las Ciencias, 6(4, Edición Especial Noviembre), 21–34. https://doi.org/10.23857/dc.v6i4.1543"
                    }
                ]
            },
            {
                title: "Monitoreo del éxito de atención prenatal sobre el peso al nacer",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "El control prenatal reduce en 1,04% la mortalidad neonatal e infantil, disminuye prematuridad, bajo peso y complicaciones respiratorias. Además, mejora el conocimiento materno y previene deficiencias nutricionales en el recién nacido.",
                        source: "Kuhnt, J., & Vollmer, S. (2017). Antenatal care services and its implications for vital and health outcomes of children: Evidence from 193 surveys in 69 low-income and middle-income countries. BMJ Open, 7(11), e017122. https://doi.org/10.1136/bmjopen-2017-017122 Kurniati, A. (2024). Improving maternal and neonatal health outcomes: A comparative study of antenatal care interventions. [Deleted Journal]. https://doi.org/10.59613/36303r04 Sánchez-Nuncio, H. R., Pérez-Toga, G., Pérez-Rodríguez, P., & Vázquez-Nava, F. (2005). Impacto del control prenatal en la morbilidad y mortalidad neonatal. Revista Médica del Instituto Mexicano del Seguro Social, 43(5), 377–380. <br>Simbolon, P., Simbolon, N., Hutauruk, A., Sitorus, S. S., & Zebua, A. J. (2023). Penyuluhan ibu hamil melalui pelayanan antenatal care untuk mencegah kurang energi kronik. Perigel: Jurnal Pendidikan dan Penelitian, 2(4). https://doi.org/10.56444/perigel.v2i4.1300."
                    }
                ]
            },
            {
                title: "Cobertura de partos atendidos en centros de salud",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "La atención del parto por personal capacitado mejora la salud materna e infantil. El control prenatal permite identificar riesgos nutricionales, mientras la deficiencia energética materna eleva el riesgo de bajo peso y desnutrición infantil.",
                        source: "Benny, D. H. P., Wulandari, I. A., Ariani, N. K. S., Rahayuni, N. W. S., & Noriani, N. K. (2024). Hubungan ibu hamil kekurangan energi kronik dengan kelahiran bayi berat badan lahir rendah. Womb Midwifery Journal, 3(1). https://doi.org/10.54832/wombmidj.v3i1.323 Rivadeneira, M. F., Moncayo, A.-L., Cóndor, J. D., Tello, B., Buitrón, J., Astudillo, F., Caicedo-Gallardo, J. D., Estrella-Proaño, A. C., Naranjo-Estrella, A., & Llano Torres, A. (2022). High prevalence of chronic malnutrition in indigenous children under 5 years of age in Chimborazo-Ecuador: Multicausal analysis of its determinants. BMC Public Health, 22, Article 1901. https://doi.org/10.1186/s12889-022-14327-x"
                    }
                ]
            },
            {
                title: "Condición nutricional de la madre al nacer",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "Una nutrición materna adecuada durante la lactancia es esencial. Deficiencias en vitaminas y minerales afectan la calidad de la leche. Madres con deficiencia energética crónica presentan mayor riesgo de bajo peso al nacer.",
                        source: "Carretero-Krug, A., Montero-Bravo, A., Morais-Moreno, C., Puga, A. M., Samaniego-Vaesken, M. L., Partearroyo, T., & Varela-Moreiras, G. (2024). Nutritional Status of Breastfeeding Mothers and Impact of Diet and Dietary Supplementation: A Narrative Review. Nutrients, 16(2), 301. https://doi.org/10.3390/nu16020301                 Benny, D. H. P., Wulandari, I. A., Ariani, N. K. S., Rahayuni, N. W. S., & Noriani, N. K. (2024). Hubungan ibu hamil kekurangan energi kronik dengan kelahiran bayi berat badan lahir rendah. Womb Midwifery Journal, 3(1). https://doi.org/10.54832/wombmidj.v3i1.323"
                    }
                ]
            },
            {
                title: "Pinzamiento oportuno del cordón umbilical",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "Incremento significativo de la hemoglobina y de ferritina a los 6 meses.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)"
                    }
                ]
            }
        ]
    },
    {
        id: "cero-a-seis-meses",
        title: "0 - 6 meses",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f97316" viewBox="0 0 256 256"><path d="M236.43,184.77A20,20,0,0,0,217.6,176H180a44.05,44.05,0,0,1-44-44,28,28,0,1,0-52,0,44.05,44.05,0,0,1-44,44H38.4a20,20,0,0,0-18.83,24.77,100,100,0,0,0,188.86,0A20,20,0,0,0,236.43,184.77Z"></path></svg>',
        iconBg: "bg-orange-100",
        borderColor: "border-orange-500",
        interventions: [
            {
                title: "Iniciación temprana de lactancia materna (1 hora)",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "Iniciar la lactancia en la primera hora reduce el riesgo de emaciación y talla baja. La lactancia temprana mejora la producción de leche, previene enfermedades neonatales y favorece la continuidad de la lactancia exclusiva.",
                        source: "Garti, H., Bukari, M., & Wemakor, A. (2023). Early initiation of breastfeeding, bottle feeding, and experiencing feeding challenges are associated with malnutrition. Food Science & Nutrition, 11, 3202–3209. https://doi.org/10.1002/fsn3.3472 <br>Anggraini, H. (2024). Hubungan inisiasi menyusu dini (IMD) dengan kecukupan produksi air susu ibu (ASI) pada ibu di PMD Mastuti Amd.Keb Kecamatan Pardasuka Kabupaten Pringsewu tahun 2024. Wellness and Healthy Magazine, (3), 51–57. https://doi.org/10.30604/well.387622024 <br>Raihana, S., Dibley, M. J., Rahman, M. M., Tahsina, T., Siddique, M. A. B., Rahman, Q. S.-u., Islam, S., Alam, A., Kelly, P. J., El Arifeen, S., & Huda, T. M. (2019). Early initiation of breastfeeding and severe illness in the early newborn period: An observational study in rural Bangladesh. PLOS Medicine, 16(8), e1002904. https://doi.org/10.1371/journal.pmed.1002904"
                    }
                ]
            },
            {
                title: "Administración de vitamina K",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "Previene el sangrado del bebé después del nacimiento y mejora la capacidad de coagulación en los primeros 7 días después del nacimiento.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    }
                ]
            },
            {
                title: "Cuidado madre canguro",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "40% de reducción del riesgo de mortalidad infantil; 58% de disminución de infección nosocomial y 77% de reducción de la prevalencia de hipotermia.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    }
                ]
            },
            {
                title: "Promoción de la lactancia materna exclusiva",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "43% de incremento de lactancia materna exclusiva en el primer día, 30% en el primer mes y 90% entre el 2 y 6 mes.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    }
                ]
            },
            {
                title: "Hábitos Saludables para madres lactantes",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "100% de la fuerza laboral en salud formada en lactancia materna, consejería nutricional para madres y niños, tratamiento de la desnutrición aguda moderada y severa.",
                        source: "FAO, & OMS. (2018). Strengthening nutrition action: a resource guide for countries based on the policy Recommendations Of the Second International Conference on Nutrition (ICN2). Recuperado de https://www.who.int/nutrition/publications/strengthening-nutrition-action/en/"
                    }
                ]
            }
        ]
    },
    {
        id: "seis-a-doce-meses",
        title: "6 - 12 Meses",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#84cc16" viewBox="0 0 256 256"><path d="M204,64a4,4,0,0,0-4,4v8a68.08,68.08,0,0,1-68,68H124a68.08,68.08,0,0,1-68-68V68a4,4,0,0,0-8,0v8A76.09,76.09,0,0,0,124,148h4a76.09,76.09,0,0,0,76-76V68A4,4,0,0,0,204,64ZM224,188H32a12,12,0,0,0-12,12v8a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12v-8A12,12,0,0,0,224,188Zm-4,16H36v-4H220Z"></path></svg>',
        iconBg: "bg-lime-100",
        borderColor: "border-lime-500",
        interventions: [
            {
                title: "Seguimiento continuo del desarrollo infantil",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "Se requiere un sistema de información que registre el estado nutricional de madres y bebés, con alertas tempranas integradas a servicios de protección social y programas de nutrición para una respuesta oportuna.",
                        source: "FAO, & OMS. (2018). Strengthening nutrition action: a resource guide for countries based on the policy Recommendations Of the Second International Conference on Nutrition (ICN2). Recuperado de https://www.who.int/nutrition/publications/strengthening-nutrition-action/en/"
                    },
                    {
                        text: "Financiamiento en salud: recibe la financiación necesaria para proporcionar recursos y herramientas suficientes para implementar actividades de nutrición en los establecimientos de salud.",
                        source: "FAO, & OMS. (2018). Strengthening nutrition action: a resource guide for countries based on the policy Recommendations Of the Second International Conference on Nutrition (ICN2). Recuperado de https://www.who.int/nutrition/publications/strengthening-nutrition-action/en/"
                    },
                    {
                        text: "Prestación de servicios: el sistema de salud cuenta con la capacidad de brindar todas las acciones esenciales en nutrición dentro de los servicios de atención prenatal, postnatal y pediátricos",
                        source: "FAO, & OMS. (2018). Strengthening nutrition action: a resource guide for countries based on the policy Recommendations Of the Second International Conference on Nutrition (ICN2). Recuperado de https://www.who.int/nutrition/publications/strengthening-nutrition-action/en/"
                    }
                ]
            },
            {
                title: "Ambientes que promocionan la lactancia materna",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "Liderazgo y gobernanza: existen políticas y leyes que protegen a la madre y su bebé.",
                        source: "FAO, & OMS. (2018). Strengthening nutrition action: a resource guide for countries based on the policy Recommendations Of the Second International Conference on Nutrition (ICN2). Recuperado de https://www.who.int/nutrition/publications/strengthening-nutrition-action/en/"
                    },
                    {
                        text: "Trabajo: Cuando hay salas de lactancia y permiso para que la mujer se extraiga en el trabajo la lactancia exclusiva durante 6 meses aumenta en un 25%.",
                        source: "Rollins, N., Bhandari, N., Hajeebhoy, N., Horton, S., Lutter, C., Martines, J., . . . The Lancet Breastfeeding Series Group. (2016). Why invest, and what it will take to improve breastfeeding practices? The Lancet, 387, 491–504. Recuperado de https://www.thelancet.com/action/showPdf?pii=S0140-6736%2815%2901044-6"
                    }
                ]
            },
            {
                title: "Continuación de la lactancia materna",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "43% de incremento de lactancia materna exclusiva en el primer día, 30% en el primer mes y 90% entre el 2 y 6 mes.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    }
                ]
            },
            {
                title: "Introducción adecuada de la alimentación complementaria",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "Quienes reciben educación en este tema tienen una ganancia de peso (26%) y talla (35%) significativa vs los que no.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    },
                    {
                        text: "La provisión de alimentos redujo en 33 % las infecciones respiratorias y en 35 % los casos de bajo peso, evidenciando su impacto positivo en la salud infantil.",
                        source: "Lassi, Z., Das, J., Zahid, G., Imdad, A., & Bhutta, Z. (2016). Impact of education and provisión of complementary feeding on growth and morbidity in children less than 2 years of age in developing countries: A systematic review. BMC Public Health, 13. Recuperado de http://www.biomedcentral.com/1471-2458/13/S3/S13"
                    },
                    {
                        text: "La asesoría a cuidadores mejora prácticas de alimentación (88 %) e higiene (38–55 %), incrementa talla (23 %) y peso (16 %), reduce desnutrición crónica (71 %) y fortalece el seguimiento nutricional (62 %).",
                        source: "Arikpo, D., Edet, E., Chibuzor, M., Odey, F., & Caldwell, D. (2018a). Cochrane Database of Systematic ReviewsEducational interventions for improving primary caregivercomplementary feeding practices for children aged 24 monthsand under (Review). Cochrane Database of Systematic Reviews, 5, 1–147. https://doi.org/10.1002/14651858.CD011768.pub2. <br>Lassi, Z., Das, J., Zahid, G., Imdad, A., & Bhutta, Z. (2016). Impact of education and provision of complementary feeding on growth and morbidity in children less than 2 years of age in developing countries: A systematic review. BMC Public Health, 13. Recuperado de http://www.biomedcentral.com/1471-2458/13/S3/S13"
                    }
                ]
            },
            {
                title: "Uso de antropometría para diagnóstico de DNTc",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "El cribado nutricional identifica y clasifica desnutrición, detecta riesgos, monitorea crecimiento, evalúa programas y refleja cronicidad. Es una herramienta práctica y económica, especialmente útil en contextos con recursos limitados.",
                        source: "Trehan, I. (2020). Anthropometry’s promise and pitfalls in the diagnosis of undernutrition among infants. Archives of Disease in Childhood, 105(6), 522-523."
                    }
                ]
            },
            {
                title: "Suplementación con múltiples micronutrientes para niños de 6 meses a 5 años",
                responsibles: "Salud, Comunicaciones, Inclusión Social y Familia, De las Mujeres, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "Los micronutrientes en polvo reducen anemia, deficiencias de hierro y retinol, y mejoran la hemoglobina. Sin embargo, su uso puede aumentar la incidencia de diarrea, requiriendo monitoreo adecuado.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    },
                    {
                        text: "14% de reducción del riesgo de mortalidad en los primeros 6 meses de vida.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    },
                    {
                        text: "49% de reducción del riesgo de anemia y 72% de deficiencia de hierro en niños menores de 2 años.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    }
                ]
            }
        ]
    },
    {
        id: "especificas-dntc",
        title: "Específicas para DNTc aún no existentes",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#8b5cf6" viewBox="0 0 256 256"><path d="M128,24A92.1,92.1,0,0,0,36,116c0,40.24,19.73,64,39.38,75.33a189.65,189.65,0,0,0,40,24.52,8,8,0,0,0,5.22,0,189.65,189.65,0,0,0,40-24.52C180.27,180,200,156.24,200,116A92.1,92.1,0,0,0,128,24Zm0,168c-23.2,0-43.2-12.83-56-32H184C171.2,179.17,151.2,192,128,192Zm52-48H76a8,8,0,0,1-6.4-12.8A76.12,76.12,0,0,1,128,40a76.12,76.12,0,0,1,58.4,127.2A8,8,0,0,1,180,144Z"></path></svg>',
        iconBg: "bg-violet-100",
        borderColor: "border-violet-500",
        interventions: [
            {
                title: "Capacidad de detección anticipada de riesgo de DNTc",
                responsibles: "Salud, Inclusión Social y Familia, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "Detectar precozmente el riesgo de desnutrición crónica permite prevenir su progresión. Factores sociodemográficos, síntomas clínicos y búsqueda activa fortalecen la identificación temprana y mejoran la capacidad predictiva en poblaciones vulnerables.",
                        source: "Dlamini, G. H., & Tlou, B. (2022). Prevalence and associated risk factors of chronic malnutrition amongst children under five in Eswatini. African journal of primary health care & family medicine, 14(1), e1–e6. https://doi.org/10.4102/phcfm.v14i1.3301 <br>Erazo Arteaga, D. C., García, J. I., Chavarriaga Maya, L. M., & Quirós-Gómez, O. I. (2022). Desnutrición crónica en niños menores de cinco años de la comunidad indígena awá, Barbacoas (Nariño, Colombia), 2019. Revista Ciencias De La Salud, 20(1). https://doi.org/10.12804/revistas.urosario.edu.co/revsalud/a.10868 <br>Vieira, K. A., Rosa-Júnior, L. S., Souza, M. A. V., Santos, N. B., Florêncio, T. M. M. T., & Bussadori, S. K. (2020). Chronic malnutrition and oral health status in children aged 1 to 5 years: An observational study. Medicine, 99(18), e19595. https://doi.org/10.1097/MD.0000000000019595 <br>Rahim, F., Afridi, I. G., & Afridi, J. M. (2013). Association of risk factors with severe malnutrition in chilren under five years of age. Journal of Medical Sciences, 21(4), 180-182."
                    }
                ]
            },
            {
                title: "Cobertura de protección inmunológica adecuada",
                responsibles: "Salud, Inclusión Social y Familia, Gerencia de la U.A.E Buen Comienzo",
                evidence: [
                    {
                        text: "La baja cobertura vacunal perpetúa el ciclo infección-malnutrición. Vacunas como rotavirus y neumococo previenen infecciones que afectan la absorción y el consumo de hierro, reduciendo así el riesgo de anemia y desnutrición crónica.",
                        source: "Román, J. (2023). Asociación entre vacunación completa y anemia en niños menores de 5 años del Perú, en los años 2019 a 2021. Nutrición clínica y dietética hospitalaria, 43(3). <br>Aké-Tano, O., Tiembré, I., Konan, Y. E., Donnen, P., Dagnan, S. N., Dramaix, M., Koffi, K., & Diarra-Nama, A. J. (2010). Malnutrition chronique chez les enfants de moins de 5 ans au nord de la Côte d'Ivoire [Chronic malnutrition among children under five years of age in the northern part of Côte d'Ivoire]. Sante publique (Vandoeuvre-les-Nancy, France), 22(2), 213–220. <br>Erazo Arteaga, D. C., García, J. I., Chavarriaga Maya, L. M., & Quirós-Gómez, O. I. (2022). Desnutrición crónica en niños menores de cinco años de la comunidad indígena awá, Barbacoas (Nariño, Colombia), 2019. Revista Ciencias De La Salud, 20(1). https://doi.org/10.12804/revistas.urosario.edu.co/revsalud/a.10868"
                    }
                ]
            },
            {
                title: "El protocolo de diagnóstico temprano del retraso en talla en niños de 0 a 59 meses se aplicará en consultas y controles, integrando evaluación médica, nutricional, psicosocial y de desarrollo físico",
                responsibles: "Intersectorial",
                evidence: [
                    {
                        text: "Reduce en un 55% la muerte por desnutrición comparado con el grupo de niños que son atendidos hospitalariamente.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    }
                ]
            },
            {
                title: "Cobertura de partos atendidos en centros de salud",
                responsibles: "Intersectorial",
                evidence: [
                    {
                        text: "Los micronutrientes en polvo reducen anemia, deficiencias de hierro y retinol, y mejoran la hemoglobina, aunque pueden incrementar la incidencia de diarrea, lo que requiere seguimiento y manejo adecuado.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    }
                ]
            },
            {
                title: "Protocolo de atención a los niños y niñas con episodios repetitivos de desnutrición aguda y/o EDA",
                responsibles: "Salud, Inclusión Social y Familia",
                evidence: [
                    {
                        text: "13% de reducción de la incidencia de diarrea, 19% de reducción de neumonía.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    },
                    {
                        text: "Hay evidencias significativas que una dosis diaria de 10mg de zinc  durante 24 semanas en niños menores de 5 años conduce a una ganancia de 0.37 cm de estatura.",
                        source: "Bhutta, Z., Das, J., Rizvi, A., Gaffey, M., Walker, N., Horton, S., . . . Maternal and Child Nutrition Study Group. (2013). Evidence-based interventions for improvement of maternal and child nutrition: what can be done and at what cost? Maternal and Child Nutrition, 382(2)."
                    }
                ]
            },
            {
                title: "Educación en signos físicos del retraso en talla para agentes de salud y comunitarios",
                responsibles: "Salud, Inclusión Social y Familia, De las Mujeres,Comunicaciones, Educación.",
                evidence: [
                    {
                        text: "Programas educativos comunitarios mejoran la detección de signos físicos, impulsan cambios conductuales y fortalecen capacidades en nutrición. La capacitación incrementa el conocimiento en medición antropométrica, uso de alimentos locales y prevención del retraso en talla.",
                        source: "Faizi, M., Rochmah, N., Hisbiyah, Y., Perwitasari, R. K., Fedora, K., & Ni'mah, N. L. (2022). Corresponding Effectiveness of Health Education about Stunting Toward Improvement of Community Knowledge. International Journal of Scientific Advances, 3(5), 778-781. <br>Fiki Wijayanti, Puji Afiatna, Yohanes Romando Sipayung, Kanesya, & Nopita. (2024). Pendampingan Pencegahan Stunting pada kader Posyandu Balita dengan Optimalisasi Bahan Pangan Lokal di Desa Lerep. INDONESIAN JOURNAL OF COMMUNITY EMPOWERMENT (IJCE), 6(2), 224–229. https://doi.org/10.35473/ijce.v6i2.3473 <br>Astriany, D., Firmansyah, A., Ismayadi, P., Risfayanti, I., Mutaqin, R. A., & Fitriansyah, S. N. (2024). Education and nutrition intervention to mitigate stunting in Cisaranten Wetan, Cinambo District, Bandung. Abdimas: Jurnal Pengabdian Masyarakat Universitas Merdeka Malang, 9(2), 251–261. https://doi.org/10.26905/abdimas.v9i2.12813 <br>Nurhanifah, D., Bianka, A., Natasya, D. A., Syahril, Muh. A. F., Sabil, S. E., Putri, S., & Khairilatilfa, S. (2024). Education and Implementation in Handling and Preventing Stunting. OMNICODE Journal (Omnicompetence Community Developement Journal), 4(1), 25–30. https://doi.org/10.55756/omnicode.v4i1.181"
                    }
                ]
            },
            {
                title: "Sistema de monitoreo niño a niño integrado entre salud y educación.",
                responsibles: "Salud, Inclusión Social y Familia, Comunicaciones, Educación, Gerencia de la U.A.E Buen Comienzo.",
                evidence: [
                    {
                        text: "Plataformas integradas en Indonesia, Hungría e India mejoran el monitoreo y prevención de la desnutrición crónica mediante educación, seguimiento en tiempo real y coordinación entre sectores salud, educación y comunidad.",
                        source: 'FU. A. Rachmawati et al., "SiCenting+: An Information System for Monitoring the Stunted Growth and Nutritional Status of Children in Pandeglang Regency," 2022 Second International Conference on Advanced Technologies in Intelligent Control, Environment, Computing & Communication Engineering (ICATIECE), Bangalore, India, 2022, pp. 1-6, doi: 10.1109/ICATIECE56365.2022.10046915. <br>Zsakai, A., Annar, D., Koronczai, B., Molnar, K., Varro, P., Toth, E., Szarvas, S., Tauber, T., Karkus, Z., Varnai, D., & Muzsnai, A. (2023). A new monitoring system for nutritional status assessment in children at home. Scientific reports, 13(1), 4155. https://doi.org/10.1038/s41598-023-30998-x <br>C. Senthilsingh, L. Sujihelen, R. G. Franklin, L. K. Joshila Grace and A. Sivasangari, "Growth Monitoring of Children and Pregnant Women using IoT Devices," 2023 2nd International Conference on Automation, Computing and Renewable Systems (ICACRS), Pudukkottai, India, 2023, pp. 1593-1597, doi: 10.1109/ICACRS58579.2023.10405379.'
                    }
                ]
            },
            {
                title: "Cualificación de agentes de salud y comunitarios en territorios en nutrición para brindar asesoría y acompañamiento a familias.",
                responsibles: "Salud, Inclusión Social y Familia, Comunicaciones, Educación, Gerencia de la U.A.E Buen Comienzo.",
                evidence: [
                    {
                        text: "La participación de agentes comunitarios reduce el retraso en talla y bajo peso, mediante promoción de lactancia, consejería alimentaria y seguimiento. Ofrecen asesoría culturalmente pertinente y fortalecen intervenciones familiares en prevención nutricional.",
                        source: "Muremyi, R. (2020). Contribution of community health workers in the prevention of disease caused by malnutrition in Rwanda. https://doi.org/10.21203/RS.3.RS-41252/V1 <br>Burt, Kate G. PhD, RD; Sisselman-Borgia, Amanda PhD, LMSW. How Community Health Workers Can Improve Workforce Diversity and Dietary Outcomes. Nutrition Today 55(5):p 254-259, 9/10 2020. | DOI: 10.1097/NT.0000000000000434"
                    }
                ]
            },
            {
                title: "Sistema de acompañamiento y asesoría de la lactancia a través de llamadas telefónicas y visitas casa",
                responsibles: "Salud, Inclusión Social y Familia, Comunicaciones, Educación, Gerencia de la U.A.E Buen Comienzo.",
                evidence: [
                    {
                        text: "El asesoramiento y apoyo inmediato a la lactancia aumentan un 49 % la lactancia exclusiva a 6 meses y un 66 % la lactancia general, fortaleciendo la salud materno-infantil.",
                        source: "Rollins, N., Bhandari, N., Hajeebhoy, N., Horton, S., Lutter, C., Martines, J., . . . The Lancet Breastfeeding Series Group. (2016). Why invest, and what it will take to improve breastfeeding practices? The Lancet, 387, 491–504. Recuperado de https://www.thelancet.com/action/showPdf?pii=S0140-6736%2815%2901044-3"
                    },
                    {
                        text: "El apoyo prenatal y postnatal en el hogar, mediante visitas y llamadas, incrementa en 48 % la probabilidad de lactancia exclusiva durante los primeros seis meses",
                        source: "Rollins, N., Bhandari, N., Hajeebhoy, N., Horton, S., Lutter, C., Martines, J., . . . The Lancet Breastfeeding Series Group. (2016). Why invest, and what it will take to improve breastfeeding practices? The Lancet, 387, 491–504. Recuperado de https://www.thelancet.com/action/showPdf?pii=S0140-6736%2815%2901044-3"
                    }
                ]
            },
            {
                title: "Promoción y apoyo de la lactancia materna exclusiva en lugares comunitarios como metro, bibliotecas, museos.",
                responsibles: "Salud, Inclusión Social y Familia, Comunicaciones, Educación, Gerencia de la U.A.E Buen Comienzo.",
                evidence: [
                    {
                        text: "Las prácticas de lactancia materna responden positivamente a intervenciones en diversos entornos. Las intervenciones combinadas pueden aumentar de 2 a 5 veces la tasa de lactancia materna exclusiva.",
                        source: "Rollins, N., Bhandari, N., Hajeebhoy, N., Horton, S., Lutter, C., Martines, J., . . . The Lancet Breastfeeding Series Group. (2016). Why invest, and what it will take to improve breastfeeding practices? The Lancet, 387, 491–504. Recuperado de https://www.thelancet.com/action/showPdf?pii=S0140-6736%2815%2901044-3"
                    },
                    {
                        text: "Las intervenciones comunitarias aumentan en 86 % el inicio oportuno de la lactancia materna y en 20 % la práctica de lactancia materna exclusiva, fortaleciendo la salud infantil.",
                        source: "Rollins, N., Bhandari, N., Hajeebhoy, N., Horton, S., Lutter, C., Martines, J., . . . The Lancet Breastfeeding Series Group. (2016). Why invest, and what it will take to improve breastfeeding practices? The Lancet, 387, 491–504. Recuperado de https://www.thelancet.com/action/showPdf?pii=S0140-6736%2815%2901044-3"
                    }
                ]
            },
            {
                title: "Estudio a profundidad sobre trabas culturales para la lactancia materna exclusiva y complementaria hasta los 2 años.",
                responsibles: "Salud, Inclusión Social y Familia, Comunicaciones, Educación, Gerencia de la U.A.E Buen Comienzo.",
                evidence: [
                    {
                        text: "Prácticas culturales inadecuadas, baja alfabetización alimentaria y escaso apoyo comunitario afectan la lactancia materna y la alimentación complementaria en Indonesia, India y Nepal, incrementando el riesgo de desnutrición crónica infantil.",
                        source: "Rahadian, A. S., & Astuti, Y. (2023). The Socio-cultural Context of Barriers to Exclusive Breastfeeding Practices among Mothers in Karanganyar District Central Java Province. Jurnal Promkes: The Indonesian Journal of Health Promotion and Health Education, 11(1SI), 52–62. https://doi.org/10.20473/jpk.V11.I1SI.2023.52-62 <br>Dhanalakshmi, S., & Selvaraj, R. (2019). A study on the prevalence of acute and chronic malnutrition and influence of feeding practices among 6 months to 2 years children in rural field practice area of Kilpauk Medical College, Tamil Nadu. International Journal Of Community Medicine And Public Health, 6(3), 1172–1177. https://doi.org/10.18203/2394-6040.ijcmph20190606 <br>Nurcahyani, I. D., Amiruddin, R., Thamrin, Y., Syam, A., Jafar, N., & Mallongi, A. (2024). Obstacles to the Complementary Feeding Assistance Program for Stunted Children Aged 6-24 Months: A Systematic Review. Pharmacognosy Journal, 16(5). <br>Shrestha, R., Bhandari, V., & Bhatt, L. D. (2019). Socio-cultural Barriers in Infant and Young Child Feeding Practice among Mothers of Kumal Community in Nuwakot District. 9(2), 58–62. https://doi.org/10.37107/JHAS.131"
                    }
                ]
            },
            {
                title: "Estudio a profundidad sobre prácticas de alimentación complementaria que incluya disponibilidad y acceso de las familias a los alimentos recomendados.",
                responsibles: "Salud, Inclusión Social y Familia, Comunicaciones, Educación, Gerencia de la U.A.E Buen Comienzo.",
                evidence: [
                    {
                        text: "Limitaciones en acceso, costo y orientación afectan la calidad de la alimentación complementaria en El Salvador, África Occidental, Nairobi y zonas urbanas, contribuyendo a la baja diversidad dietética y al retraso en talla.",
                        source: "Guadalupe Arevalo Soto, Irene Maria MD, MSc1; Lopez Samayoa, Bernardo Donery MD2,*; Mariona Gómez, Ingrid Thayana MD3; Reyes Aguilera, Gino Smith MD, MPH4. S1677 Knowledge of Complementary Feeding Practices in the First Year of Life in El Salvador, Central America. The American Journal of Gastroenterology 118(10S):p S1255, October 2023. | DOI: 10.14309/01.ajg.0000956348.02059.3a <br>Mitchodigni, I., Hounkpatin, W. A., Ntandou-Bouzitou, G., Termote, C., Bodjrenou, F. S. U., Mutanen, M., & Hounhouigan, D. J. (2018). Complementary feeding practices among children under two years old in west Africa: a review. African Journal of Food, Agriculture, Nutrition and Development, 18(2), 13541–13557. https://doi.org/10.18697/AJFAND.82.17350 <br>Agarwal, A. K., Rajput, A., Mahore, R., & Dubey, G. (2023). A cross-sectional study of feeding practice status in children (6–23 months), association with malnutrition, and impacts of maternal determinants. Asian Journal of Medical Sciences. https://doi.org/10.3126/ajms.v14i12.58549 <br>Shitemi, C., Kyallo, F., & Kombe, Y. (2018). Complementary feeding practices and nutritional status of children 6 to 24 months: A cross-sectional descriptive study. African Journal of Health Sciences, 31(1), 49–50. https://doi.org/10.4314/AJHS.V31I1"
                    }
                ]
            }
        ]
    }
];
