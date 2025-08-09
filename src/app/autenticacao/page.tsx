import { Header } from "@/components/shared/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Login from "./componentes/login";
import Cadastrar from "./componentes/cadastrar";

const Autenticacao = async () => {
  return (
    <>
      <Header />

      <div className="flex w-full flex-col gap-6 p-5">
        <Tabs defaultValue="sign-in">
          <TabsList>
            <TabsTrigger value="login">Entrar</TabsTrigger>
            <TabsTrigger value="cadastrar">Criar conta</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="w-full">
            <Login />
          </TabsContent>
          <TabsContent value="cadastrar" className="w-full">
            <Cadastrar />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Autenticacao;