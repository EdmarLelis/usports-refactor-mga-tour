import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import Card from "../components/ui/CenterCard";
import Devider from "../components/ui/Devider";

const TermsOfAgreement = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Card className="m-10">
          <h1 className="text-3xl font-bold text-brand-orange mb-6">
            Termo de Ciência e Concordância
          </h1>
          <Devider />

          <p className="mb-6 text-sm leading-relaxed">
            Os presentes <strong>Termos e Condições de Uso e Compra</strong> regulam a relação entre
            <strong> Usports</strong>, doravante denominada simplesmente <strong>Usports</strong>, e o
            cliente, doravante denominado <strong>Cliente</strong>, que acessa ou utiliza o site
            <strong> usportsbsb.com</strong>.
          </p>

          <p className="mb-8 text-sm leading-relaxed">
            Ao acessar este site, o Cliente declara estar ciente de que a Usports encontra-se em
            <strong> fase de produção e estruturação operacional</strong>, concordando integralmente com os termos abaixo.
          </p>

          <h2 className="text-xl font-semibold text-brand-orange mb-2">
            1. Considerações Gerais
          </h2>
          <p className="mb-6 text-sm leading-relaxed">
            A Usports atua no segmento de <strong>produtos esportivos</strong>, incluindo uniformes e itens relacionados. 
            No momento, os produtos divulgados no site encontram-se em <strong>fase de produção</strong> e 
            <strong> ainda não estão em distribuição comercial</strong>.
          </p>

          <h2 className="text-xl font-semibold text-brand-orange mb-2">
            2. Confidencialidade e Segurança
          </h2>
          <p className="mb-6 text-sm leading-relaxed">
            A Usports compromete-se a preservar a confidencialidade de todas as informações fornecidas pelo Cliente.
            O site utiliza medidas de segurança, incluindo certificado SSL, para proteção dos dados.
          </p>

          <h2 className="text-xl font-semibold text-brand-orange mb-2">
            3. Serviço de Atendimento ao Cliente (SAC)
          </h2>
          <p className="mb-2 text-sm leading-relaxed">
            O Cliente poderá entrar em contato com a Usports por meio dos canais abaixo:
          </p>
          <ul className="mb-6 list-disc list-inside text-sm">
            <li>WhatsApp: <strong>+55 (61) 3263-2401</strong></li>
            <li>Email: 
              <strong>
                <a href="mailto:comercial@usports.br" className="underline text-gray-100">comercial@usports.br</a>
              </strong>
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-brand-orange mb-2">
            4. Produtos e Disponibilidade
          </h2>
          <p className="mb-4 text-sm leading-relaxed">
            Os produtos apresentados no site possuem caráter informativo e ilustrativo. A Usports informa que:
          </p>
          <ul className="mb-6 list-disc list-inside text-sm">
            <li>Os produtos ainda não estão disponíveis para entrega imediata;</li>
            <li>Os prazos exibidos são estimativas;</li>
            <li>Modelos, preços e descrições podem ser alterados sem aviso prévio.</li>
          </ul>

          <h2 className="text-xl font-semibold text-brand-orange mb-2">
            5. Política de Entrega
          </h2>
          <p className="mb-6 text-sm leading-relaxed">
            Enquanto a Usports estiver em fase de produção, as entregas poderão ser suspensas, adiadas ou ajustadas. 
            O Cliente será informado previamente sobre qualquer alteração relacionada ao seu pedido.
          </p>

          <h2 className="text-xl font-semibold text-brand-orange mb-2">
            6. Direito de Arrependimento
          </h2>
          <p className="mb-6 text-sm leading-relaxed">
            Nos termos do Código de Defesa do Consumidor, quando aplicável, o Cliente poderá exercer o direito de arrependimento 
            em até <strong>7 (sete) dias corridos</strong> após o recebimento do produto. Considerando que os produtos ainda estão em produção, 
            pedidos poderão ser cancelados antes do envio, sem ônus ao Cliente.
          </p>

          <h2 className="text-xl font-semibold text-brand-orange mb-2">
            7. Trocas e Devoluções
          </h2>
          <p className="mb-6 text-sm leading-relaxed">
            As políticas de troca e devolução poderão ser atualizadas conforme a Usports avance para a fase de distribuição ativa. 
            No momento, solicitações serão avaliadas individualmente.
          </p>

          <h2 className="text-xl font-semibold text-brand-orange mb-2">
            8. Preços e Pagamentos
          </h2>
          <p className="mb-6 text-sm leading-relaxed">
            Os valores apresentados no site são provisórios e podem variar conforme tamanho, modelo ou estágio de produção do produto.
          </p>

          <h2 className="text-xl font-semibold text-brand-orange mb-2">
            9. Disposições Finais
          </h2>
          <p className="mb-8 text-sm leading-relaxed">
            A Usports reserva-se o direito de atualizar estes Termos a qualquer momento. Recomenda-se que o Cliente revise este conteúdo periodicamente.
          </p>

          <Card bg="bg-black/20" border="border-1 border-brand-orange"> 
            <p className="text-lg font-semibold text-brand-orange"><strong>Usports</strong></p>
            <p>Site: <strong>usportsbsb.com</strong></p>
            <p>Email: <strong>comercial@usports.br</strong></p>
            <p>WhatsApp: <strong>+55 (61) 3263-2401</strong></p>
          </Card>
        </Card>

      </main>
      
      <Footer />
    </>
    
  )
}

export default TermsOfAgreement;