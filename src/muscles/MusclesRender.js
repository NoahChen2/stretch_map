import RenderM from "./RenderM";
import React, { useState } from 'react';
//head
import { ReactComponent as Occipitofrontalis } from "./front/1head/1occipitofrontalis.svg";
import { ReactComponent as Orbicularis_oculi } from "./front/1head/2orbicularis_oculi.svg";
import { ReactComponent as Zygomaticus_major } from "./front/1head/3zygomaticus_major.svg";
import { ReactComponent as Zygomaticus_minor } from "./front/1head/4zygomaticus_minor.svg";
import { ReactComponent as Orbicularis_oris } from "./front/1head/5orbicularis_oris.svg";
import { ReactComponent as Masseter } from "./front/1head/6masseter.svg";
import { ReactComponent as Buccinator } from "./front/1head/7buccinator.svg";
import { ReactComponent as Depressor_anguli_oris } from "./front/1head/8depressor_anguli_oris.svg";
import { ReactComponent as Depressor_labi_inferioris } from "./front/1head/9depressor_labi_inferioris.svg";
import { ReactComponent as Mentalis } from "./front/1head/10mentalis.svg";

//neck
import { ReactComponent as Digastric } from "./front/2neck/1digastric.svg";
import { ReactComponent as Mylohyoid } from "./front/2neck/2mylohyoid.svg";
import { ReactComponent as Stylohoid } from "./front/2neck/3stylohoid.svg";
//gap for double distastric
import { ReactComponent as Thyrohyoid } from "./front/2neck/5thyrohyoid.svg";
import { ReactComponent as Superior_belly_of_omohyoid } from "./front/2neck/6superior_belly_of_omohyoid.svg";
import { ReactComponent as Sternohyoid } from "./front/2neck/7sternohyoid.svg";
import { ReactComponent as Sternocleidomastoid } from "./front/2neck/8sternocleidomastoid.svg";
import { ReactComponent as Scalene } from "./front/2neck/9scalene.svg";
import { ReactComponent as Inferior_belly_of_omohyoid } from "./front/2neck/10inferior_belly_of_omohyoid.svg";
import { ReactComponent as Trapezius } from "./front/2neck/11trapezius.svg";

//chest
import { ReactComponent as Deltoid } from "./front/3chest/1deltoid.svg";
import { ReactComponent as Clavicular_head_of_pectoralis_major } from "./front/3chest/2clavicular_head_of_pectoralis_major.svg";
import { ReactComponent as Sternocostal_head_of_pectoralis_major } from "./front/3chest/3sternocostal_head_of_pectoralis_major.svg";
import { ReactComponent as Abdominal_head_of_pectoralis_major } from "./front/3chest/4abdominal_head_of_pectoralis_major.svg";

//arms
import { ReactComponent as Long_Head_of_Biceps_Branchii_Muscle } from "./front/4arms/1long_head_of_biceps_branchii_muscle.svg";
import { ReactComponent as Short_Head_of_Biceps_Branchii_Muscle } from "./front/4arms/2short_head_of_biceps_branchii_muscle.svg";
import { ReactComponent as Latissimus_Dorsi } from "./front/4arms/3latissimus_dorsi.svg";
import { ReactComponent as Coracobrachialis } from "./front/4arms/4coracobrachialis.svg";
import { ReactComponent as Brachialis } from "./front/4arms/5brachialis.svg";
import { ReactComponent as Brachioradialis } from "./front/4arms/6brachioradialis.svg";
import { ReactComponent as Flexor_Carpi_Radialis } from "./front/4arms/7flexor_carpi_radialis.svg";
import { ReactComponent as Palmaris_Longus } from "./front/4arms/8palmaris_longus.svg";
import { ReactComponent as Flexor_Carpi_Ulnaris } from "./front/4arms/9flexor_carpi_ulnaris.svg";
import { ReactComponent as Flexor_Digitorum_Superficialis } from "./front/4arms/10flexor_digitorum_superficialis.svg";
import { ReactComponent as Extensor_Carpi_Radialis_Brevis } from "./front/4arms/11extensor_carpi_radialis_brevis.svg";
import { ReactComponent as Extensor_Carpi_Radialis_Longus } from "./front/4arms/12extensor_carpi_radialis_longus.svg";
import { ReactComponent as Opponens_Pollicis } from "./front/4arms/13opponens_pollicis.svg";
import { ReactComponent as Abductor_Pollicis_Brevis } from "./front/4arms/14abductor_pollicis_brevis.svg";
import { ReactComponent as Flexor_Pollicis_Brevis } from "./front/4arms/15flexor_pollicis_brevis.svg";
import { ReactComponent as Abductor_Digiti_Minimi_of_Hand } from "./front/4arms/16abductor_digiti_minimi_of_hand.svg";
import { ReactComponent as Flexor_Digiti_Minimi_Brevis_of_Hand } from "./front/4arms/17flexor_digiti_minimi_brevis_of_hand.svg";
import { ReactComponent as Opponens_Digiti_Minimi_of_Hand } from "./front/4arms/18opponens_digiti_minimi_of_hand.svg";
import { ReactComponent as Abductor_Pollicis } from "./front/4arms/19abductor_pollicis.svg";
import { ReactComponent as Lumbrical } from "./front/4arms/20lumbrical.svg";

//core
import { ReactComponent as Serratus_Anterior } from "./front/5core/1serratus_anterior.svg";
import { ReactComponent as External_Oblique } from "./front/5core/2external_oblique.svg";
import { ReactComponent as Rectus_Abdominus } from "./front/5core/3rectus_abdominus.svg";

//topLegs
import { ReactComponent as Tensor_Fasciae_Latae } from "./front/6topLegs/1tensor_fasciae_latae.svg";
import { ReactComponent as Iliopsoas } from "./front/6topLegs/2iliopsoas.svg";
import { ReactComponent as Pectineus } from "./front/6topLegs/3pectineus.svg";
import { ReactComponent as Sartorius } from "./front/6topLegs/4sartorius.svg";
import { ReactComponent as Adductor_Longus } from "./front/6topLegs/5adductor_longus.svg";
import { ReactComponent as Gracillis } from "./front/6topLegs/6gracillis.svg";
import { ReactComponent as Vastus_Lateralis } from "./front/6topLegs/7vastus_lateralis.svg";
import { ReactComponent as Rectus_Femoris } from "./front/6topLegs/8rectus_femoris.svg";
import { ReactComponent as Vastus_Medialis } from "./front/6topLegs/9vastus_medialis.svg";

// bottomLegs
import { ReactComponent as Peroneus_Longus } from "./front/7bottomLegs/1peroneus_longus.svg";
import { ReactComponent as Tibialis_Anterior } from "./front/7bottomLegs/2tibialis_anterior.svg";
import { ReactComponent as Gastrocnemius } from "./front/7bottomLegs/3gastrocnemius.svg";
import { ReactComponent as Soleus } from "./front/7bottomLegs/4soleus.svg";
import { ReactComponent as Extensor_Digitorium_Longus } from "./front/7bottomLegs/5extensor_digitorium_longus.svg";
import { ReactComponent as Extensor_Hallucis_Longus } from "./front/7bottomLegs/6extensor_hallucis_longus.svg";
import { ReactComponent as Extensor_of_Foot } from "./front/7bottomLegs/7extensor_of_foot.svg";
import { ReactComponent as Abductor_Hallucis } from "./front/7bottomLegs/8abductor_hallucis.svg";
import { ReactComponent as Abductor_Digiti_Minimi_of_Foot } from "./front/7bottomLegs/9abductor_digiti_minimi_of_foot.svg";
import { ReactComponent as Flexor_Digitorum_Brevis } from "./front/7bottomLegs/10flexor_digitorum_brevis.svg";
import { ReactComponent as Lumbricals_of_Foot } from "./front/7bottomLegs/11lumbricals_of_foot.svg";

import { ReactComponent as FrontTemplate } from "./front/FrontTemplate.svg";

//head
import { ReactComponent as Occipitalis } from "./back/1head/1occipitalis.svg";
import { ReactComponent as Sternocleidomastoid2 } from "./back/1head/2sternocleidomastoid.svg";
import { ReactComponent as Splenius_Capitis } from "./back/1head/3splenius_capitis.svg";

//back
import { ReactComponent as Trapezius2 } from "./back/2back/1trapezius.svg";
import { ReactComponent as Deltoid2 } from "./back/2back/2deltoid.svg";
import { ReactComponent as Teres_Minor } from "./back/2back/3teres_minor.svg";
import { ReactComponent as Teres_Major } from "./back/2back/4teres_major.svg";
import { ReactComponent as Latissimus_Dorsi2 } from "./back/2back/5latissimus_dorsi.svg";
import { ReactComponent as External_Oblique2 } from "./back/2back/6external_oblique.svg";
import { ReactComponent as Infraspinatus } from "./back/2back/7infraspinatus.svg";

//arms
import { ReactComponent as Long_head_of_Triceps_Brachii } from "./back/3arms/1long_head_of_triceps_brachii.svg";
import { ReactComponent as Lateral_Head_of_Triceps_Brachii } from "./back/3arms/2lateral_head_of_triceps_brachii.svg";
import { ReactComponent as Brachioradialis2 } from "./back/3arms/3brachioradialis.svg";
import { ReactComponent as Extensor_Carpi_Radialis_Longus2 } from "./back/3arms/4extensor_carpi_radialis_longus.svg";
import { ReactComponent as Anconeus } from "./back/3arms/5anconeus.svg";
import { ReactComponent as Extensor_Carpi_Radialis_Brevis2 } from "./back/3arms/6extensor_carpi_radialis_brevis.svg";
import { ReactComponent as Flexor_Carpi_Ulnaris_Muscle } from "./back/3arms/7flexor_carpi_ulnaris_muscle.svg";
import { ReactComponent as Extensor_Carpi_Ulranis } from "./back/3arms/8extensor_carpi_ulranis.svg";
import { ReactComponent as Extensor_Digiti_Minimi } from "./back/3arms/9extensor_digiti_minimi.svg";
import { ReactComponent as Extensor_Digitorum_Muscle } from "./back/3arms/10extensor_digitorum_muscle.svg";
import { ReactComponent as Abductor_Pollicis_Longus } from "./back/3arms/11abductor_pollicis_longus.svg";
import { ReactComponent as Extensor_Pollicis_Brevis } from "./back/3arms/12extensor_pollicis_brevis.svg";
import { ReactComponent as Dorsal_Interosseous_of_Hand } from "./back/3arms/13dorsal_interosseous_of_hand.svg";

//leg
import { ReactComponent as Gluteus_Medius } from "./back/4leg/1gluteus_medius.svg";
import { ReactComponent as Gluteus_Maximus } from "./back/4leg/2gluteus_maximus.svg";
import { ReactComponent as Adductor_Magnus } from "./back/4leg/3adductor_magnus.svg";
import { ReactComponent as Gracilis } from "./back/4leg/4gracilis.svg";
import { ReactComponent as Semitendinosus } from "./back/4leg/5semitendinosus.svg";
import { ReactComponent as Biceps_Femoris } from "./back/4leg/6biceps_femoris.svg";
import { ReactComponent as Semimembranosus } from "./back/4leg/7semimembranosus.svg";
import { ReactComponent as Satorius } from "./back/4leg/8satorius.svg";
import { ReactComponent as Plantaris } from "./back/4leg/9plantaris.svg";
import { ReactComponent as Gastrocnemius2 } from "./back/4leg/10gastrocnemius.svg";
import { ReactComponent as Soleus2 } from "./back/4leg/11soleus.svg";

import { ReactComponent as BackTemplate } from "./back/BackTemplate.svg";

const myStyle = (posX, posY, width, height) => {
    return ({
        position: "absolute",
        left: posX + "%",
        top: posY + "%",
        width: width + "%",
        height: height + "%",
    })
};
var frontList = [];
var backList = [];
const frontAddOnList = (mN, de, mS, wL, pS) => {
    frontList.push({
        mName: mN,
        description: de,
        myStyle: mS,
        clicked: 0,
        webLink: wL,
        picSrc: pS,
        myStyle2: Object.assign(Object.assign([], mS), { filter: "brightness(60%) invert(100%) hue-rotate(40deg)" })
    })
}
const backAddOnList = (mN, de, mS, wL, pS) => {
    backList.push({
        mName: mN,
        description: de,
        myStyle: mS,
        clicked: 0,
        webLink: wL,
        picSrc: pS,
        myStyle2: Object.assign(Object.assign([], mS), { filter: "brightness(60%) invert(100%) hue-rotate(40deg)" })
    })
}

// eslint-disable-next-line
{
    // eslint-disable-next-line
    {
        //head
        frontAddOnList("Occipitofrontalis", "example.com", myStyle(42.6, -.1, 11, 5), "https://google.com", Occipitofrontalis);
        frontAddOnList("Orbicularis Oculi", "222.com", myStyle(43.1, 1.7, 10, 5), "https://yahoo.com", Orbicularis_oculi);
        frontAddOnList("Zygomaticus Major", "222.com", myStyle(42, 3, 12, 5), "https://o.com", Zygomaticus_major);
        frontAddOnList("Zygomaticus Minor", "222.com", myStyle(44.15, 3.2, 7.8, 5), "https://o.com", Zygomaticus_minor);
        frontAddOnList("Orbicularis Oris", "222.com", myStyle(44.6, 4, 7, 5), "https://o.com", Orbicularis_oris);
        frontAddOnList("Masseter", "222.com", myStyle(41.4, 6.4, 14, 5), "https://o.com", Masseter);
        frontAddOnList("Buccinator", "222.com", myStyle(42.45, 5.1, 11.8, 5), "https://o.com", Buccinator);
        frontAddOnList("Depressor Anguli Oris", "222.com", myStyle(44.05, 6, 8.5, 5), "https://o.com", Depressor_anguli_oris);
        frontAddOnList("Depressor Labi Inferioris", "222.com", myStyle(45.6, 5.5, 5.3, 5), "https://o.com", Depressor_labi_inferioris);
        frontAddOnList("Mentalis", "222.com", myStyle(47.4, 5.8, 1.7, 5), "https://o.com", Mentalis);
    }
    // eslint-disable-next-line
    {
        //neck
        frontAddOnList("Digastric", "example.com", myStyle(43.8, 8, 9, 5), "https://google.com", Digastric);
        frontAddOnList("Mylohyoid", "example.com", myStyle(45, 8, 6.7, 5), "https://google.com", Mylohyoid);
        frontAddOnList("Stylohoid", "example.com", myStyle(44.6, 8.6, 7.5, 5), "https://google.com", Stylohoid);
        frontAddOnList("Thyrohyoid", "example.com", myStyle(44.85, 10.7, 7, 5), "https://google.com", Thyrohyoid);
        frontAddOnList("Superior Belly of Omohyoid", "example.com", myStyle(45.35, 11.4, 6, 5), "https://google.com", Superior_belly_of_omohyoid);
        frontAddOnList("Sternohyoid", "example.com", myStyle(42.7, 12.3, 11.4, 5), "https://google.com", Sternohyoid);
        frontAddOnList("Sternocleidomastoid", "example.com", myStyle(41.8, 9.3, 13, 10), "https://google.com", Sternocleidomastoid);
        frontAddOnList("Scalene", "example.com", myStyle(40.1, 13.8, 16.5, 5), "https://google.com", Scalene);
        frontAddOnList("Inferior Belly of Omohyoid", "example.com", myStyle(40.13, 15.1, 16.4, 5), "https://google.com", Inferior_belly_of_omohyoid);
        frontAddOnList("Trapezius", "example.com", myStyle(35.8, 10.5, 25, 10), "https://google.com", Trapezius);
    }
    // eslint-disable-next-line
    {
        //chest
        frontAddOnList("Deltoid", "example.com", myStyle(28.3, 12.6, 40, 20), "https://google.com", Deltoid);
        frontAddOnList("Clavicular Head of Pectoralis Major", "example.com", myStyle(32.25, 10.7, 32, 20), "https://google.com", Clavicular_head_of_pectoralis_major);
        frontAddOnList("Sternocostal Head of Pectoralis Major", "example.com", myStyle(32.2, 14.9, 32, 20), "https://google.com", Sternocostal_head_of_pectoralis_major);
        frontAddOnList("Abdominal Head of Pectoralis Major", "example.com", myStyle(35.8, 18.5, 25, 20), "https://google.com", Abdominal_head_of_pectoralis_major);
    }
    // eslint-disable-next-line
    {
        //arms
        frontAddOnList("Long Head of Biceps Branchii Muscle", "example.com", myStyle(28.5, 20.4, 40, 20), "https://google.com", Long_Head_of_Biceps_Branchii_Muscle);
        frontAddOnList("Short Head of Biceps Branchii Muscle", "example.com", myStyle(30.25, 20.4, 36.5, 20), "https://google.com", Short_Head_of_Biceps_Branchii_Muscle);
        frontAddOnList("Latissimus Dorsi", "example.com", myStyle(33.8, 19.1, 29.1, 20), "https://google.com", Latissimus_Dorsi);
        frontAddOnList("Coracobrachialis", "example.com", myStyle(33, 15.6, 31, 20), "https://google.com", Coracobrachialis);
        frontAddOnList("Brachialis", "example.com", myStyle(29.1, 26.6, 38.5, 20), "https://google.com", Brachialis);
        frontAddOnList("Brachioradialis", "example.com", myStyle(25.9, 30, 45, 20), "https://google.com", Brachioradialis);
        frontAddOnList("Flexor Carpi Radialis", "example.com", myStyle(26.4, 32, 44, 20), "https://google.com", Flexor_Carpi_Radialis);
        frontAddOnList("Palmaris Longus", "example.com", myStyle(28.25, 31.5, 40.3, 20), "https://google.com", Palmaris_Longus);
        frontAddOnList("Flexor Carpi Ulnaris", "example.com", myStyle(30.95, 30.4, 34.8, 20), "https://google.com", Flexor_Carpi_Ulnaris);
        frontAddOnList("Flexor Digitorum Superficialis", "example.com", myStyle(27.65, 34.4, 41.7, 20), "https://google.com", Flexor_Digitorum_Superficialis);
        frontAddOnList("Extensor Carpi Radialis Brevis", "example.com", myStyle(24.2, 37.1, 48.5, 20), "https://google.com", Extensor_Carpi_Radialis_Brevis);
        frontAddOnList("Extensor Carpi Radialis Longus", "example.com", myStyle(24.4, 35.4, 48, 20), "https://google.com", Extensor_Carpi_Radialis_Longus);
        frontAddOnList("Opponens Pollicis", "example.com", myStyle(19.8, 41, 57.4, 20), "https://google.com", Opponens_Pollicis);
        frontAddOnList("Abductor Pollicis Brevis", "example.com", myStyle(20, 41.3, 57, 20), "https://google.com", Abductor_Pollicis_Brevis);
        frontAddOnList("Flexor Pollicis Brevis", "example.com", myStyle(20.5, 41.59, 56, 20), "https://google.com", Flexor_Pollicis_Brevis);
        frontAddOnList("Abductor Digiti Minimi of Hand", "example.com", myStyle(27.35, 43, 42.2, 20), "https://google.com", Abductor_Digiti_Minimi_of_Hand);
        frontAddOnList("Flexor Digiti Minimi Brevis of Hand", "example.com", myStyle(26.8, 43, 43.35, 20), "https://google.com", Flexor_Digiti_Minimi_Brevis_of_Hand);
        frontAddOnList("Opponens Digiti Minimi of Hand", "example.com", myStyle(25.8, 43, 45.35, 20), "https://google.com", Opponens_Digiti_Minimi_of_Hand);
        frontAddOnList("Abductor Pollicis", "example.com", myStyle(20.8, 43.1, 55.3, 20), "https://google.com", Abductor_Pollicis);
        frontAddOnList("Lumbrical", "example.com", myStyle(21.1, 44.6, 54.6, 20), "https://google.com", Lumbrical);
    }
    // eslint-disable-next-line
    {
        //core
        frontAddOnList("Serratus Anterior", "example.com", myStyle(35.2, 18.8, 26.2, 20), "https://google.com", Serratus_Anterior);
        frontAddOnList("External Oblique", "example.com", myStyle(34.8, 27.7, 26.5, 20), "https://google.com", External_Oblique);
        frontAddOnList("Rectus Abdominus", "example.com", myStyle(38.2, 27, 20, 25), "https://google.com", Rectus_Abdominus);
    }
    // eslint-disable-next-line
    {
        //toplegs
        frontAddOnList("Tensor Fasciae Latae", "example.com", myStyle(33.51, 42.5, 29.3, 30), "https://google.com", Tensor_Fasciae_Latae);
        frontAddOnList("Iliopsoas", "example.com", myStyle(37.2, 35.5, 21.8, 30), "https://google.com", Iliopsoas);
        frontAddOnList("Pectineus", "example.com", myStyle(42.2, 37.9, 11.8, 30), "https://google.com", Pectineus);
        frontAddOnList("Sartorius", "example.com", myStyle(35.5, 42.5, 25, 30), "https://google.com", Sartorius);
        frontAddOnList("Adductor Longus", "example.com", myStyle(42, 43.3, 12.1, 30), "https://google.com", Adductor_Longus);
        frontAddOnList("Gracillis", "example.com", myStyle(45.5, 46, 5.3, 30), "https://google.com", Gracillis);
        frontAddOnList("Vastus Lateralis", "example.com", myStyle(35.1, 46.6, 26.2, 30), "https://google.com", Vastus_Lateralis);
        frontAddOnList("Rectus Femoris", "example.com", myStyle(37, 46.4, 22.5, 30), "https://google.com", Rectus_Femoris);
        frontAddOnList("Vastus Medialis", "example.com", myStyle(42.5, 56, 11.3, 25), "https://google.com", Vastus_Medialis);
    }

    // eslint-disable-next-line
    {
        //bottomlegs
        frontAddOnList("Peroneus Longus", "example.com", myStyle(38.2, 68.5, 20, 25), "https://google.com", Peroneus_Longus);
        frontAddOnList("Tibialis Anterior", "example.com", myStyle(40.2, 69.3, 16, 25), "https://google.com", Tibialis_Anterior);
        frontAddOnList("Gastrocnemius", "example.com", myStyle(44.2, 68.3, 8, 25), "https://google.com", Gastrocnemius);
        frontAddOnList("Soleus", "example.com", myStyle(43.6, 74.5, 9.3, 25), "https://google.com", Soleus);
        frontAddOnList("Extensor Digitorium Longus", "example.com", myStyle(39.7, 74, 17, 25), "https://google.com", Extensor_Digitorium_Longus);
        frontAddOnList("Extensor Hallucis Longus", "example.com", myStyle(42.44, 78, 11.4, 25), "https://google.com", Extensor_Hallucis_Longus);
        frontAddOnList("Extensor of Foot", "example.com", myStyle(42.1, 81.65, 12.3, 25), "https://google.com", Extensor_of_Foot);
        frontAddOnList("Abductor Hallucis", "example.com", myStyle(44.7, 83.7, 7, 25), "https://google.com", Abductor_Hallucis);
        frontAddOnList("Abductor Digiti Minimi of Foot", "example.com", myStyle(40.7, 83, 15, 25), "https://google.com", Abductor_Digiti_Minimi_of_Foot);
        frontAddOnList("Flexor Digitorum Brevis", "example.com", myStyle(40.7, 84.1, 15, 25), "https://google.com", Flexor_Digitorum_Brevis);
        frontAddOnList("Lumbricals of Foot", "example.com", myStyle(40.3, 86, 15.6, 25), "https://google.com", Lumbricals_of_Foot);
    }
}

// eslint-disable-next-line
{
    // eslint-disable-next-line
    {
        //head
        backAddOnList("Occipitalis", "example.com", myStyle(42.7, 0.3, 11.5, 10), "https://google.com", Occipitalis);
        backAddOnList("Sternocleidomastoid", "example.com", myStyle(43.6, 6.3, 10, 10), "https://google.com", Sternocleidomastoid2);
        backAddOnList("Splenius_Capitis", "example.com", myStyle(44.5, 5.5, 8.2, 10), "https://google.com", Splenius_Capitis);
    }
    // eslint-disable-next-line
    {
        //back
        backAddOnList("Trapezius", "example.com", myStyle(37.55, 8.7, 22, 25), "https://google.com", Trapezius2);
        backAddOnList("Deltoid", "example.com", myStyle(28, 10.4, 41, 25), "https://google.com", Deltoid2);
        backAddOnList("Teres Minor", "example.com", myStyle(35.15, 12.8, 26.5, 25), "https://google.com", Teres_Minor);
        backAddOnList("Teres Major", "example.com", myStyle(34.3, 14.4, 28.5, 25), "https://google.com", Teres_Major);
        backAddOnList("Latissimus Dorsi", "example.com", myStyle(33, 20, 31, 25), "https://google.com", Latissimus_Dorsi2);
        backAddOnList("External Oblique", "example.com", myStyle(34.3, 25.4, 28.2, 25), "https://google.com", External_Oblique2);
        backAddOnList("Infraspinatus", "example.com", myStyle(36.2, 12.6, 24.6, 25), "https://google.com", Infraspinatus);
    }
    // eslint-disable-next-line
    {
        //arms
        backAddOnList("Long head of Triceps Brachii", "example.com", myStyle(29.1, 17.5, 39, 25), "https://google.com", Long_head_of_Triceps_Brachii);
        backAddOnList("Lateral Head of Triceps Brachii", "example.com", myStyle(32.9, 20.3, 31.2, 25), "https://google.com", Lateral_Head_of_Triceps_Brachii);
        backAddOnList("Brachioradialis", "example.com", myStyle(28.05, 20.6, 41.1, 25), "https://google.com", Brachioradialis2);
        backAddOnList("Extensor Carpi Radialis Longus", "example.com", myStyle(26.6, 24.8, 43.9, 25), "https://google.com", Extensor_Carpi_Radialis_Longus2);
        backAddOnList("Anconeus", "example.com", myStyle(30.05, 24.8, 37.1, 25), "https://google.com", Anconeus);
        backAddOnList("Extensor Carpi Radialis Brevis", "example.com", myStyle(26.7, 27.2, 43.8, 25), "https://google.com", Extensor_Carpi_Radialis_Brevis2);
        backAddOnList("Flexor Carpi Ulnaris Muscle", "example.com", myStyle(29.8, 28.6, 37.5, 25), "https://google.com", Flexor_Carpi_Ulnaris_Muscle);
        backAddOnList("Extensor Carpi Ulranis", "example.com", myStyle(28.4, 31.5, 40.25, 25), "https://google.com", Extensor_Carpi_Ulranis);
        backAddOnList("Extensor Digiti Minimi", "example.com", myStyle(28, 31, 41, 25), "https://google.com", Extensor_Digiti_Minimi);
        backAddOnList("Extensor Digitorum Muscle", "example.com", myStyle(26, 30.8, 45, 25), "https://google.com", Extensor_Digitorum_Muscle);
        backAddOnList("Abductor Pollicis Longus", "example.com", myStyle(24.6, 33.2, 47.8, 25), "https://google.com", Abductor_Pollicis_Longus);
        backAddOnList("Extensor Pollicis Brevis", "example.com", myStyle(24.6, 34.7, 47.8, 25), "https://google.com", Extensor_Pollicis_Brevis);
        backAddOnList("Dorsal Interosseous of Hand", "example.com", myStyle(21.3, 40.5, 54.3, 25), "https://google.com", Dorsal_Interosseous_of_Hand);
    }
    // eslint-disable-next-line
    {
        //leg
        backAddOnList("Gluteus Medius", "example.com", myStyle(35.5, 33, 25.8, 25), "https://google.com", Gluteus_Medius);
        backAddOnList("Gluteus Maximus", "example.com", myStyle(36, 37.8, 24.8, 25), "https://google.com", Gluteus_Maximus);
        backAddOnList("Adductor Magnus", "example.com", myStyle(44.2, 44.2, 8.5, 25), "https://google.com", Adductor_Magnus);
        backAddOnList("Gracilis", "example.com", myStyle(45, 48.2, 6.8, 25), "https://google.com", Gracilis);
        backAddOnList("Semitendinosus", "example.com", myStyle(42, 47.4, 13, 25), "https://google.com", Semitendinosus);
        backAddOnList("Biceps Femoris", "example.com", myStyle(38.3, 50.7, 20.2, 25), "https://google.com", Biceps_Femoris);
        backAddOnList("Semimembranosus", "example.com", myStyle(38.5, 54, 19.8, 25), "https://google.com", Semimembranosus);
        backAddOnList("Satorius", "example.com", myStyle(45.3, 58.8, 6.3, 25), "https://google.com", Satorius);
        backAddOnList("Plantaris", "example.com", myStyle(40, 59.4, 16.95, 25), "https://google.com", Plantaris);
        backAddOnList("Gastrocnemius", "example.com", myStyle(37.25, 67, 22.5, 25), "https://google.com", Gastrocnemius2);
        backAddOnList("Soleus", "example.com", myStyle(38.2, 78.5, 20.4, 25), "https://google.com", Soleus2);
    }
}
var tempList = [];
const MusclesRender = (props) => {
    const [fSide, setfSide] = useState(props.fSide);
    if (fSide) {
        if (props.fSide) {
            tempList = frontList;
        } else {
            setfSide(props.fSide);
        }
    }
    else {
        if (!props.fSide) {
            tempList = backList;
        } else {
            setfSide(props.fSide);
        }
    }
    const childClick = (name, description, mPos) => {
        let objIndex = tempList.findIndex((obj => obj.mName === name));
        for (let i = 0; i < tempList.length; i++) {
            if (i !== objIndex) {
                tempList[i]["clicked"] = 0;
            }
        }
        tempList[objIndex].clicked = 1;
        props.handleChildClick(name, description, mPos, tempList[objIndex]["webLink"],
            `https://www.ecosia.org/search?q= how to stretch "${name}"`);

    }
    if (fSide) {
        return (
            <div className="MusclesBorder">
                {tempList.map((item, index) => (
                    <RenderM key={index} mName={item["mName"]} description={item["description"]}
                        mStyle={props.isClicked && props.clName === item["mName"] ? item["myStyle2"] : item["myStyle"]}
                        webLink={item["webLink"]}
                        pic={item["picSrc"]} handleClick={childClick} />
                ))}
                <FrontTemplate style={fSide ? { opacity: "100%" } : { opacity: "0%" }} />
            </div>
        );
    } else {
        return(
        <div className="MusclesBorder">
            {tempList.map((item, index) => (
                <RenderM key={index} mName={item["mName"]} description={item["description"]}
                    mStyle={props.isClicked && props.clName === item["mName"] ? item["myStyle2"] : item["myStyle"]}
                    webLink={item["webLink"]}
                    pic={item["picSrc"]} handleClick={childClick} />
            ))}
            <BackTemplate style={fSide ? { opacity: "0%" } : { opacity: "100%", bottom:"0%", height:"99.5%" }} />
        </div>
        );
    }
}

export default MusclesRender;
