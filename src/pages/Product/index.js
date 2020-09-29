import React from 'react';

import { Header, Layout, ProductDetail } from '../../components';

import './styles.scss';

export default function Index() {
  const productData = {
    name: 'Dipirona monoidratada em Gotas',
    image:
      'https://lh3.googleusercontent.com/proxy/_EET_a8m2mj_CRbSeNPufS4-LS8eENAkw_yp_AXgmY7Yisf_0kqqvUM0yOPz_NC0-G_Al6xiDYL12qWXVppW6jYfwR0XBxyvFcUsQ4On8d_HDzfUtXzP-uM0Ug',
    price: 18.99,
    shortDescription:
      'A Dipirona Sódica é um analgésico e antitérmico utilizado em enfermidades que tenham dor e febre como sintomas. É comumente utilizada no tratamento de gripes e resfriados, nevralgias, dores de cabeça, reumatismo muscular, artrites e outras crises dolorosas.',
    isAvaible: true,
    stock: 100,
    indication:
      'Analgésico e antitérmico, sendo indicado para o alívio da dor e febre. Uso oral. Uso adulto e pediátrico acima de 3 meses. ',
    contraindication:
      'Hipersensibilidade à dipirona ou à qualquer um dos componentes da fórmula ou, ainda, com intolerância conhecida aos derivados pirazolônicos (exemplo: isopropilaminofenazona, fenazona, propifenazona, fenilbutazona, oxifembutazona) incluindo caso anterior de agranulocitose em relação a um destes medicamentos; determinadas doenças metabólicas, como porfiria hepática aguda intermitente (risco de indução de crises de porfiria) e deficiência congênita da glicose-6-fosfato-desidrogenase (risco de hemólise); função da medula óssea insuficiente (exemplo: após tratamento citostático) ou doenças do sistema hematopoiético; asma analgésica ou intolerância analgésica do tipo urticária-angioedema, ou seja, pacientes com desenvolvimento anterior de broncoespasmo ou outras reações anafilactóides (exemplo: urticária, rinite, angioedema) provocadas por salicilatos, paracetamol ou outros antiinflamatórios não esteroidais (exemplo: diclofenaco, ibuprofeno, indometacina, naproxeno); crianças menores de 3 meses de idade ou pesando menos de 5 (cinco) quilos; durante os três primeiros e três últimos meses de gravidez.',
    reactions:
      'Reações anafiláticas na forma de sintomas cutâneos ou nas mucosas (tais como: prurido, ardor, rubor, urticária, inchaço), dispneia e, menos frequentemente, sintomas gastrintestinais. Podem progredir para formas graves como urticária generalizada, angioedema grave (até mesmo envolvendo a laringe), broncoespasmo grave, arritmias cardíacas, queda da pressão sanguínea (algumas vezes precedida por aumento da pressão sanguínea) e choque circulatório.',
    prevent:
      'A administração deste medicamento pode causar reações hipotensivas isoladas, possivelmente dose-dependentes, portanto, cuidados especiais são necessários em pacientes com pressão sanguínea abaixo de 100 mmHg ou com condições circulatórias instáveis (exemplo: deficiência circulatória incipiente associada a infarto do miocárdio, lesões múltiplas ou choque recente). Pacientes com asma brônquica, com urticária crônica, com intolerância ao álcool apresentam risco especial para reações anafilactoides graves possivelmente relacionadas à dipirona. Recomenda-se não utilizar durante os primeiros 3 meses da gravidez, durante o segundo trimestre o uso somente deve ocorrer após cuidadosa avaliação do potencial risco/benefício pelo médico. A lactação deve ser evitada durante e até 48 horas após o uso da medicação devido à excreção dos metabólitos da dipirona no leite materno.',
  };
  return (
    <>
      <Header />
      <Layout>
        <ProductDetail productData={productData} />
        <div className="p-product-info-container">
          <p className="p-product-info-title">DESCRIÇÃO</p>
          <p>
            <span className="p-product-info-bold">Indicações: </span>
            {productData.indication}
          </p>
          <p>
            <span className="p-product-info-bold">Contraindicações: </span>
            {productData.contraindication}
          </p>
          <p>
            <span className="p-product-info-bold">Reações adversas: </span>
            {productData.reactions}
          </p>
          <p>
            <span className="p-product-info-bold">Precauções: </span>
            {productData.prevent}
          </p>
        </div>
      </Layout>
    </>
  );
}
