npm install reactstrap react react-dom
npm install react-router-dom

--

------------------------------------------------------------------------------------

CREATE DATABASE sgfidb;

------------------------------------------------------------------------------------

-- Table: public.compras

-- DROP TABLE IF EXISTS public.compras;

CREATE TABLE IF NOT EXISTS public.compras
(
    data timestamp without time zone NOT NULL,
    quantidade integer NOT NULL,
    valorunidade real NOT NULL,
    idcompra integer NOT NULL,
    CONSTRAINT compras_pkey PRIMARY KEY (idcompra),
    CONSTRAINT id_fi_fk FOREIGN KEY (idcompra)
        REFERENCES public.fi (idfi) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT id_user_fk FOREIGN KEY (idcompra)
        REFERENCES public.usuario (idusuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.compras
    OWNER to postgres;

------------------------------------------------------------------------------------

-- Table: public.fi

-- DROP TABLE IF EXISTS public.fi;

CREATE TABLE IF NOT EXISTS public.fi
(
    idfi integer NOT NULL DEFAULT nextval('fi_idfi_seq'::regclass),
    tipo bit(1) NOT NULL,
    nome character varying(50) COLLATE pg_catalog."default" NOT NULL,
    fabricante character varying(30) COLLATE pg_catalog."default" NOT NULL,
    quantidade integer NOT NULL,
    barcode character varying(13) COLLATE pg_catalog."default",
    CONSTRAINT fi_pkey PRIMARY KEY (idfi)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.fi
    OWNER to postgres;

------------------------------------------------------------------------------------

-- Table: public.usuario

-- DROP TABLE IF EXISTS public.usuario;

CREATE TABLE IF NOT EXISTS public.usuario
(
    idusuario integer NOT NULL DEFAULT nextval('usuario_idusuario_seq'::regclass),
    nome character varying(40) COLLATE pg_catalog."default" NOT NULL,
    login character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(40) COLLATE pg_catalog."default" NOT NULL,
    senha character varying(32) COLLATE pg_catalog."default" NOT NULL,
    permissaonivel bytea NOT NULL,
    datacadastro timestamp without time zone NOT NULL,
    ultimologin timestamp without time zone,
    CONSTRAINT usuario_pkey PRIMARY KEY (idusuario)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.usuario
    OWNER to postgres;