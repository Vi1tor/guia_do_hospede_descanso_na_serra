import React, { useState } from 'react';
import { Copy, AlertTriangle, AlertCircle, Info, Check, Ban, MapPin, Navigation, RotateCcw } from 'lucide-react';

export function CancelamentoContent() {
  return (
    <div className="space-y-4 text-text-main">
      <div className="bg-white p-5 rounded-xl border-l-4 border-l-emerald-500 shadow-sm flex gap-4 items-start">
        <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Direito de Arrependimento</h4>
          <p className="text-sm">Reembolso integral para cancelamentos solicitados em até <strong>7 dias corridos</strong> após a confirmação da reserva (Art. 49 do CDC).</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border-l-4 border-l-orange-400 shadow-sm flex gap-4 items-start">
        <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Após o Prazo Legal</h4>
          <p className="text-sm">Passados os 7 dias da compra, não haverá reembolso ou estorno de valores pagos, independentemente da data do check-in.</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border-l-4 border-l-red-500 shadow-sm flex gap-4 items-start">
        <Ban className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">No-Show (Não Comparecimento)</h4>
          <p className="text-sm">O não comparecimento na data reservada sem aviso prévio resultará na retenção de <strong>100% do valor pago</strong>.</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border-l-4 border-l-primary-700 shadow-sm flex gap-4 items-start">
        <RotateCcw className="w-6 h-6 text-primary-700 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Prazo de Estorno</h4>
          <p className="text-sm">Para casos dentro do direito de arrependimento, o estorno será processado em até <strong>7 dias</strong>.</p>
        </div>
      </div>
    </div>
  );
}

const BREAKFAST_ITEMS = [
  'Café', 'Leite', 'Suco natural de laranja', 'Achocolatado em pó', 'Chá',
  'Pão francês', 'Pães de queijo', 'Fruta', 'Danone', 'Bolo',
  'Manteiga', 'Requeijão', 'Queijo', 'Presunto', 'Ovos mexidos',
  'Açúcar', 'Adoçante'
];

export function CafeContent() {
  return (
    <div className="space-y-6 text-text-main">
      <div className="bg-surface-100 p-4 rounded-xl text-sm flex items-start gap-3">
        <ClockIcon />
        <span>Café da manhã servido no quarto às <strong>9h</strong>.</span>
      </div>

      <div className="bg-white p-5 rounded-xl border border-surface-200 shadow-sm">
        <h3 className="font-serif text-lg text-primary-900 mb-4">Itens</h3>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
          {BREAKFAST_ITEMS.map(item => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function CheckinContent() {
  return (
    <div className="space-y-6 text-text-main leading-relaxed">
      <div className="bg-white p-5 rounded-xl border border-surface-200 shadow-sm">
        <h3 className="font-serif text-lg text-primary-900 mb-3 flex items-center gap-2">
          <ClockIcon /> Horários
        </h3>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="font-semibold text-primary-800">Check-in:</span>
            A partir das 15h.
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-primary-800">Check-out:</span>
            Até às 12h.
          </li>
        </ul>
      </div>

      <div className="bg-surface-100 p-4 rounded-xl text-sm flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
        <p>
          <span className="font-medium block mb-1">Late Checkout</span>
          Passado o horário do checkout será cobrado o valor de meia diária.
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl border border-surface-200 shadow-sm">
        <p className="flex items-start gap-3">
          <Info className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" />
          <span>Senhas de acesso ao chalé são passadas no dia do check-in.</span>
        </p>
      </div>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  );
}

export function ArrumacaoContent() {
  return (
    <div className="space-y-6 text-text-main leading-relaxed">
      <div className="bg-white p-5 rounded-xl border border-surface-200 shadow-sm">
        <p className="mb-4">
          Para o seu conforto, oferecemos serviço de arrumação diário.
        </p>
        <div className="bg-surface-50 p-4 rounded-lg border border-surface-200 mb-4">
          <p className="font-medium flex items-center gap-2 text-primary-900">
            <AlertTriangle className="w-5 h-5 text-accent-600" />
            Atenção aos Horários
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>• Necessário solicitar a arrumação até às <strong>11h</strong>.</li>
            <li>• A arrumação é feita entre <strong>13h e 15h</strong>.</li>
          </ul>
        </div>
        <p className="text-sm text-text-muted italic">
          * Dentro do horário de arrumação, o chalé deve estar livre. Passado esse horário, não será possível realizar a arrumação.
        </p>
      </div>
    </div>
  );
}

export function WifiContent() {
  const [selectedChale, setSelectedChale] = useState<number>(1);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const wifiInfo = [
    { chale: 1, rede: "Descanso na Serra 1", senha: "descanso380" },
    { chale: 2, rede: "Descanso na Serra 2", senha: "descanso380" },
    { chale: 3, rede: "Descanso na Serra 3", senha: "Descanso380" },
  ];

  const currentWifi = wifiInfo.find(w => w.chale === selectedChale)!;

  return (
    <div className="space-y-6 text-text-main">
      <div className="bg-white p-5 rounded-xl border border-surface-200 shadow-sm">
        <label className="block text-sm font-medium text-text-muted mb-2">
          Selecione o seu Chalé
        </label>
        <div className="flex gap-2">
          {[1, 2, 3].map(num => (
            <button
              key={num}
              onClick={() => setSelectedChale(num)}
              className={`flex-1 py-3 px-2 text-center rounded-lg border font-medium transition-colors ${
                selectedChale === num 
                  ? 'bg-primary-900 text-white border-primary-900 shadow-md' 
                  : 'bg-surface-50 text-text-main border-surface-200 hover:bg-surface-100'
              }`}
            >
              Chalé {num}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-surface-200 shadow-sm space-y-5">
        <div>
          <p className="text-sm text-text-muted mb-1 uppercase tracking-wider font-medium">Rede Wi-Fi</p>
          <p className="text-lg font-semibold text-primary-900">{currentWifi.rede}</p>
        </div>
        
        <div>
          <p className="text-sm text-text-muted mb-1 uppercase tracking-wider font-medium">Senha</p>
          <div className="flex items-center justify-between bg-surface-50 p-3 rounded-lg border border-surface-200">
            <span className="font-mono text-lg tracking-wider text-text-main">
              {currentWifi.senha}
            </span>
            <button 
              onClick={() => handleCopy(currentWifi.senha)}
              className="flex items-center justify-center w-10 h-10 rounded-md bg-white border border-surface-200 text-primary-800 hover:bg-surface-100 transition-colors shadow-sm"
              aria-label="Copiar senha"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
          {copied && (
            <p className="text-xs text-emerald-600 font-medium mt-2 text-right">Senha copiada!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function RegrasContent() {
  return (
    <div className="space-y-4 text-text-main">
      <div className="bg-white p-5 rounded-xl border-l-4 border-l-red-500 shadow-sm flex gap-4 items-start">
        <Ban className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Proibido Fumar</h4>
          <p className="text-sm">Proibido fumar dentro do chalé.</p>
          <p className="text-sm font-medium text-red-600 mt-2 bg-red-50 inline-block px-2 py-1 rounded">Multa: R$ 200,00</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border-l-4 border-l-surface-300 shadow-sm flex gap-4 items-start">
        <Ban className="w-6 h-6 text-text-muted flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Sem Pets</h4>
          <p className="text-sm">Não aceitamos animais de estimação na propriedade.</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border-l-4 border-l-orange-400 shadow-sm flex gap-4 items-start">
        <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Lareira e Toalhas</h4>
          <p className="text-sm">É estritamente proibido secar toalhas na lareira.</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border-l-4 border-l-red-500 shadow-sm flex gap-4 items-start">
        <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Maquiagem nas Toalhas</h4>
          <p className="text-sm">O uso de maquiagem que manche as toalhas está sujeito a cobrança.</p>
          <p className="text-sm font-medium text-red-600 mt-2 bg-red-50 inline-block px-2 py-1 rounded">Taxa: R$ 150,00</p>
        </div>
      </div>
    </div>
  );
}

export function BanheiraContent() {
  return (
    <div className="space-y-4 text-text-main">
      <div className="bg-white p-6 rounded-xl border border-surface-200 shadow-sm space-y-5">
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span><strong>Proibido</strong> uso de flores na banheira.</span>
          </li>
          <li className="flex items-start gap-3">
            <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span><strong>Proibido</strong> uso de produtos com cor dentro da banheira.</span>
          </li>
          <li className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" />
            <span>A hidromassagem só pode ser acionada <strong>depois</strong> de cobrir os bicos com água.</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span>A banheira deve ser esvaziada <strong>logo após o uso</strong>.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function LencolContent() {
  return (
    <div className="space-y-6 text-text-main">
      <div className="bg-white p-6 rounded-xl border border-surface-200 shadow-sm space-y-4">
        <p className="flex items-start gap-3">
          <ClockIcon />
          <span>Após ligado, demora <strong>40 minutos</strong> para esquentar.</span>
        </p>
        <p className="flex items-start gap-3">
          <Info className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" />
          <span>Cada lado da cama tem um controle independente (pode ser ligado individualmente).</span>
        </p>
      </div>

      <div className="bg-red-50 border border-red-200 p-5 rounded-xl shadow-sm flex gap-4 items-start">
        <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-red-800 uppercase tracking-wide text-sm mb-1">Aviso Importante</h4>
          <p className="text-red-700 font-medium">SEMPRE deixar desligado quando não estiver em uso.</p>
        </div>
      </div>
    </div>
  );
}

export function LocalizacaoContent() {
  const lat = -22.8558878;
  const lng = -46.0788436;
  const googleMapsUrl = "https://www.google.com/maps/place/Chal%C3%A9s+Descanso+na+Serra+-+Monte+Verde-Mg/@-22.8558878,-46.0788436,17z/data=!3m1!4b1!4m9!3m8!1s0x94cc0503c5534725:0x82bad815eecac01b!5m2!4m1!1i2!8m2!3d-22.8558878!4d-46.0788436!16s%2Fg%2F11lgjtggc_?entry=ttu";
  const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
  const embedUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`;

  return (
    <div className="space-y-6 text-text-main">
      <div className="bg-white p-5 rounded-xl border border-surface-200 shadow-sm flex items-start gap-3">
        <MapPin className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-serif text-lg text-primary-900 mb-1">Chalés Descanso na Serra</h3>
          <p className="text-sm text-text-muted">Monte Verde, MG</p>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-surface-200 shadow-sm">
        <iframe
          title="Mapa - Chalés Descanso na Serra"
          src={embedUrl}
          className="w-full h-56 md:h-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-primary-900 text-white py-4 px-5 rounded-xl font-medium shadow-sm hover:bg-primary-800 transition-colors"
        >
          <Navigation className="w-5 h-5" />
          Abrir no Google Maps
        </a>

        <a
          href={wazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white text-primary-900 py-4 px-5 rounded-xl font-medium border border-surface-200 shadow-sm hover:bg-surface-100 transition-colors"
        >
          <Navigation className="w-5 h-5" />
          Abrir no Waze
        </a>
      </div>
    </div>
  );
}

export function EsquecidosContent() {
  return (
    <div className="space-y-6 text-text-main">
      <div className="bg-white p-6 rounded-xl border border-surface-200 shadow-sm text-center">
        <div className="w-16 h-16 bg-surface-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-accent-600" />
        </div>
        <h3 className="font-serif text-xl text-primary-900 mb-4">
          Antes de ir embora, dê uma última conferida!
        </h3>
        <p className="text-text-muted mb-4">
          Não nos responsabilizamos por itens e pertences esquecidos nas acomodações.
        </p>
        <div className="bg-surface-50 p-4 rounded-lg text-sm mb-4">
          Por razões logísticas da região — Monte Verde não dispõe de agência dos Correios — não realizamos a postagem ou despacho de objetos deixados no local.
        </div>
        <p className="font-medium text-primary-800">
          Verifique suas malas e faça uma excelente viagem de volta!
        </p>
        <p className="text-sm mt-4 pt-4 border-t border-surface-200 font-medium">
          Checkout até 12:00 (meio-dia).
        </p>
      </div>
    </div>
  );
}
