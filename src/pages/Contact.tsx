import React from 'react';
import { useForm } from 'react-hook-form';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  description: string;
  budget: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Note: You'll need to replace these with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          service_type: data.serviceType,
          message: data.description,
          budget: data.budget,
        },
        'YOUR_PUBLIC_KEY'
      );
      
      alert('Mensagem enviada com sucesso!');
      reset();
    } catch (error) {
      alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    }
  };

  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold text-white mb-8">Entre em Contato</h1>
            <p className="text-lg text-gray-400 mb-8">
              Estamos prontos para transformar sua ideia em realidade. Preencha o formulário
              ou use um de nossos canais diretos de contato.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-400 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-white">Telefone</h3>
                  <p className="text-gray-400">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-400 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-gray-400">contact@izcode.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-indigo-400 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-white">Endereço</h3>
                  <p className="text-gray-400">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">Nome</label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-1"
                />
                {errors.name && <span className="text-red-400 text-sm">Nome é obrigatório</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-1"
                />
                {errors.email && <span className="text-red-400 text-sm">Email válido é obrigatório</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Telefone</label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Tipo de Serviço</label>
                <select
                  {...register('serviceType', { required: true })}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-1"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="web-design">Web Design</option>
                  <option value="development">Desenvolvimento Web</option>
                  <option value="seo">SEO</option>
                  <option value="other">Outro</option>
                </select>
                {errors.serviceType && <span className="text-red-400 text-sm">Selecione um tipo de serviço</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Descrição do Projeto</label>
                <textarea
                  {...register('description', { required: true })}
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.description && <span className="text-red-400 text-sm">Descrição é obrigatória</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Orçamento Estimado</label>
                <input
                  type="text"
                  {...register('budget')}
                  placeholder="Ex: R$ 5.000"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-1"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;