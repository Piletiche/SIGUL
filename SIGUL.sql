PGDMP         .                z            SIGUL    14.5    14.5                 0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    18023    SIGUL    DATABASE     R   CREATE DATABASE "SIGUL" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE "SIGUL";
                postgres    false                        0    0    DATABASE "SIGUL"    COMMENT     c   COMMENT ON DATABASE "SIGUL" IS 'Base de Dados do novo Sistema de Gestรฃo da Universidade Licungo';
                   postgres    false    3615            ี            1259    18095    Paises    TABLE     อ   CREATE TABLE public."Paises" (
    id_pais character varying(10) NOT NULL,
    pais_nome character varying(100),
    pais_nacionalidade character varying(100),
    pais_continente character varying(30)
);
    DROP TABLE public."Paises";
       public         heap    postgres    false            !           0    0    TABLE "Paises"    COMMENT     ?   COMMENT ON TABLE public."Paises" IS 'paises e nacionalidades';
          public          postgres    false    213            า            1259    18040 	   Provincia    TABLE     ก   CREATE TABLE public."Provincia" (
    provincia_id character varying(10) NOT NULL,
    nome_provincia character varying(50),
    regiao character varying(50)
);
    DROP TABLE public."Provincia";
       public         heap    postgres    false            "           0    0    TABLE "Provincia"    COMMENT     N   COMMENT ON TABLE public."Provincia" IS 'Tabela para armazenar as provincias';
          public          postgres    false    210            ึ            1259    18112    Regime    TABLE        CREATE TABLE public."Regime" (
    id_regime smallint NOT NULL,
    sigla_regime character varying(10),
    nome_regime character varying(50)
);
    DROP TABLE public."Regime";
       public         heap    postgres    false            ำ            1259    18050    distrito    TABLE     ฃ   CREATE TABLE public.distrito (
    distrito_id character varying(10) NOT NULL,
    nome_distrito character varying(100),
    provincia_id character varying(10)
);
    DROP TABLE public.distrito;
       public         heap    postgres    false            #           0    0    TABLE distrito    COMMENT     9   COMMENT ON TABLE public.distrito IS 'distritos do pais';
          public          postgres    false    211            ั            1259    18024    id_estudante    SEQUENCE        CREATE SEQUENCE public.id_estudante
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 923897645677988
    CACHE 1;
 #   DROP SEQUENCE public.id_estudante;
       public          postgres    false            $           0    0    SEQUENCE id_estudante    COMMENT     R   COMMENT ON SEQUENCE public.id_estudante IS 'auto Increment for estudent id only';
          public          postgres    false    209            ื            1259    18150 	   estudante    TABLE       CREATE TABLE public.estudante (
    id integer DEFAULT nextval('public.id_estudante'::regclass) NOT NULL,
    estudante_id character varying(12) NOT NULL,
    ano_ingresso smallint NOT NULL,
    apelido character varying(50) NOT NULL,
    nomes character varying(200) NOT NULL,
    data_nasc date NOT NULL,
    sexo boolean NOT NULL,
    pai character varying(200) NOT NULL,
    mae character varying(200) NOT NULL,
    provincia_id character varying(10) NOT NULL,
    distrito_id character varying(10) NOT NULL,
    localidade_id character varying(10),
    nacionalidade character varying(10) NOT NULL,
    bairro character varying(10),
    avenida character varying(100),
    quarteirao character varying(50),
    casa_nr character varying(10),
    telefone1 integer NOT NULL,
    telefone2 integer NOT NULL,
    email character varying(100) NOT NULL,
    parente_nome character varying(200) NOT NULL,
    parente_telefone integer NOT NULL,
    parente_email character varying(100),
    habilitacao_ingresso character varying(50) NOT NULL,
    area_formacao character varying(50) NOT NULL,
    escola_id character varying(10) NOT NULL,
    foto character varying(200),
    data_import date,
    activo boolean NOT NULL,
    observacao text,
    processo_file character varying(200),
    user_id character varying(20),
    forma_admissao character varying(100),
    curso_id smallint,
    regime_id smallint,
    documento_tipo character varying(20),
    documento_nr character varying(20),
    documento_local character varying(50),
    documento_validade date
);
    DROP TABLE public.estudante;
       public         heap    postgres    false    209            %           0    0    TABLE estudante    COMMENT     J   COMMENT ON TABLE public.estudante IS 'Tabela do estudante da Unilicungo';
          public          postgres    false    215            &           0    0    COLUMN estudante.forma_admissao    COMMENT     {   COMMENT ON COLUMN public.estudante.forma_admissao IS 'a forma de admissao pode ser aprovado, suplente, repescado, listas';
          public          postgres    false    215            ิ            1259    18075 
   localidade    TABLE     ๋   CREATE TABLE public.localidade (
    id_localidade character varying(10) NOT NULL,
    localidade_nome character varying(100) NOT NULL,
    distrito_id character varying(10) NOT NULL,
    provincia_id character varying(10) NOT NULL
);
    DROP TABLE public.localidade;
       public         heap    postgres    false                       2606    18099    Paises Paises_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public."Paises"
    ADD CONSTRAINT "Paises_pkey" PRIMARY KEY (id_pais);
 @   ALTER TABLE ONLY public."Paises" DROP CONSTRAINT "Paises_pkey";
       public            postgres    false    213            |           2606    18044    Provincia Provincia_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."Provincia"
    ADD CONSTRAINT "Provincia_pkey" PRIMARY KEY (provincia_id);
 F   ALTER TABLE ONLY public."Provincia" DROP CONSTRAINT "Provincia_pkey";
       public            postgres    false    210                       2606    18116    Regime Regime_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public."Regime"
    ADD CONSTRAINT "Regime_pkey" PRIMARY KEY (id_regime);
 @   ALTER TABLE ONLY public."Regime" DROP CONSTRAINT "Regime_pkey";
       public            postgres    false    214            ~           2606    18054    distrito distrito_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.distrito
    ADD CONSTRAINT distrito_pkey PRIMARY KEY (distrito_id);
 @   ALTER TABLE ONLY public.distrito DROP CONSTRAINT distrito_pkey;
       public            postgres    false    211                       2606    18157    estudante estudante_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.estudante
    ADD CONSTRAINT estudante_pkey PRIMARY KEY (estudante_id);
 B   ALTER TABLE ONLY public.estudante DROP CONSTRAINT estudante_pkey;
       public            postgres    false    215                       2606    18079    localidade localidade_pk 
   CONSTRAINT     a   ALTER TABLE ONLY public.localidade
    ADD CONSTRAINT localidade_pk PRIMARY KEY (id_localidade);
 B   ALTER TABLE ONLY public.localidade DROP CONSTRAINT localidade_pk;
       public            postgres    false    212                       2606    18158    estudante distrito_Fkey    FK CONSTRAINT        ALTER TABLE ONLY public.estudante
    ADD CONSTRAINT "distrito_Fkey" FOREIGN KEY (distrito_id) REFERENCES public.distrito(distrito_id);
 C   ALTER TABLE ONLY public.estudante DROP CONSTRAINT "distrito_Fkey";
       public          postgres    false    3454    215    211                       2606    18085    localidade distrito_fk    FK CONSTRAINT        ALTER TABLE ONLY public.localidade
    ADD CONSTRAINT distrito_fk FOREIGN KEY (distrito_id) REFERENCES public.distrito(distrito_id) MATCH FULL NOT VALID;
 @   ALTER TABLE ONLY public.localidade DROP CONSTRAINT distrito_fk;
       public          postgres    false    3454    212    211                       2606    18163    estudante localidade_Fkey    FK CONSTRAINT        ALTER TABLE ONLY public.estudante
    ADD CONSTRAINT "localidade_Fkey" FOREIGN KEY (localidade_id) REFERENCES public.localidade(id_localidade) MATCH FULL;
 E   ALTER TABLE ONLY public.estudante DROP CONSTRAINT "localidade_Fkey";
       public          postgres    false    212    215    3456                       2606    18168    estudante nacionalidade_Fkey    FK CONSTRAINT        ALTER TABLE ONLY public.estudante
    ADD CONSTRAINT "nacionalidade_Fkey" FOREIGN KEY (nacionalidade) REFERENCES public."Paises"(id_pais);
 H   ALTER TABLE ONLY public.estudante DROP CONSTRAINT "nacionalidade_Fkey";
       public          postgres    false    213    215    3458                       2606    18080    localidade prov_FK    FK CONSTRAINT        ALTER TABLE ONLY public.localidade
    ADD CONSTRAINT "prov_FK" FOREIGN KEY (provincia_id) REFERENCES public."Provincia"(provincia_id) MATCH FULL NOT VALID;
 >   ALTER TABLE ONLY public.localidade DROP CONSTRAINT "prov_FK";
       public          postgres    false    212    210    3452                       2606    18173    estudante provincia_Fkey    FK CONSTRAINT        ALTER TABLE ONLY public.estudante
    ADD CONSTRAINT "provincia_Fkey" FOREIGN KEY (provincia_id) REFERENCES public."Provincia"(provincia_id);
 D   ALTER TABLE ONLY public.estudante DROP CONSTRAINT "provincia_Fkey";
       public          postgres    false    215    3452    210                       2606    18055    distrito provincia_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.distrito
    ADD CONSTRAINT provincia_fkey FOREIGN KEY (provincia_id) REFERENCES public."Provincia"(provincia_id);
 A   ALTER TABLE ONLY public.distrito DROP CONSTRAINT provincia_fkey;
       public          postgres    false    210    3452    211                       2606    18178    estudante regime_Fkey    FK CONSTRAINT        ALTER TABLE ONLY public.estudante
    ADD CONSTRAINT "regime_Fkey" FOREIGN KEY (regime_id) REFERENCES public."Regime"(id_regime);
 A   ALTER TABLE ONLY public.estudante DROP CONSTRAINT "regime_Fkey";
       public          postgres    false    3460    214    215           