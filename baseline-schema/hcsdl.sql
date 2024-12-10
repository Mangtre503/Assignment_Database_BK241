CREATE DATABASE [hcsdl]
GO
USE [hcsdl]
GO
/****** Object:  Table [dbo].[address]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[address](
	[addr_id] [bigint] IDENTITY(1,1) NOT NULL,
	[house_number] [int] NULL,
	[street_name] [varchar](255) NULL,
	[user_id] [bigint] NOT NULL,
	[district_city_id] [bigint] NULL,
	[province_id] [bigint] NULL,
	[ward_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[addr_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[administrator]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[administrator](
	[admin_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[admin_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[belong_to]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[belong_to](
	[bill_id] [bigint] NOT NULL,
	[class_id] [bigint] NOT NULL,
	[tutor_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[bill_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[bill]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[bill](
	[bill_id] [bigint] IDENTITY(1,1) NOT NULL,
	[bill_money] [bigint] NULL,
	[bill_photo_url] [varbinary](max) NULL,
	[bill_status] [varchar](255) NULL,
	[bill_type] [varchar](255) NULL,
	[admin_id] [bigint] NULL,
	[vou_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[bill_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[can_teach_at]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[can_teach_at](
	[tutor_id] [bigint] NOT NULL,
	[district_city_id] [bigint] NOT NULL,
	[province_id] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[can_teach_style]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[can_teach_style](
	[tutor_id] [bigint] NOT NULL,
	[style_id] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[can_teach_subject]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[can_teach_subject](
	[tutor_id] [bigint] NOT NULL,
	[subject_id] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[can_teach_type]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[can_teach_type](
	[tutor_id] [bigint] NOT NULL,
	[class_type_id] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[certificate]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[certificate](
	[cert_id] [bigint] NOT NULL,
	[cert_year] [int] NULL,
	[cert_grade] [varchar](255) NULL,
	[tutor_id] [bigint] NOT NULL,
	[certificate_type_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[cert_id] ASC,
	[tutor_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[certificate_type]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[certificate_type](
	[certificate_type_id] [bigint] IDENTITY(1,1) NOT NULL,
	[certificate_type_name] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[certificate_type_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[class]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[class](
	[class_id] [bigint] IDENTITY(1,1) NOT NULL,
	[class_deposit] [bigint] NULL,
	[class_status] [varchar](255) NULL,
	[commistion_fee] [bigint] NULL,
	[requirement] [varchar](255) NULL,
	[salary] [bigint] NULL,
	[addr_id] [bigint] NOT NULL,
	[student_id] [bigint] NOT NULL,
	[teaching_style_id] [bigint] NOT NULL,
	[tutor_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[class_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[class_type]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[class_type](
	[class_type_id] [bigint] IDENTITY(1,1) NOT NULL,
	[class_type_name] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[class_type_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[consultation_req]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[consultation_req](
	[cq_id] [bigint] IDENTITY(1,1) NOT NULL,
	[cq_status] [varchar](255) NULL,
	[requirement] [varchar](255) NULL,
	[addr_id] [bigint] NOT NULL,
	[student_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[cq_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cr_want_subject]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cr_want_subject](
	[consultation_id] [bigint] NOT NULL,
	[subject_id] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cr_want_type]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cr_want_type](
	[consultation_id] [bigint] NOT NULL,
	[class_type_id] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[degree]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[degree](
	[degr_id] [bigint] NOT NULL,
	[degr_major_name] [varchar](255) NULL,
	[degr_type] [varchar](255) NULL,
	[degr_year] [int] NULL,
	[tutor_id] [bigint] NOT NULL,
	[granted_institution_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[degr_id] ASC,
	[tutor_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[degree_institution]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[degree_institution](
	[edi_code] [bigint] IDENTITY(1,1) NOT NULL,
	[edi_name] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[edi_code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[district_city]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[district_city](
	[district_city_id] [bigint] NOT NULL,
	[dis_city_name] [varchar](255) NULL,
	[province_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[district_city_id] ASC,
	[province_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[graduated_from]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[graduated_from](
	[tutor_id] [bigint] NOT NULL,
	[institution_id] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[has_class_type]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[has_class_type](
	[class_id] [bigint] NOT NULL,
	[class_type_id] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[has_subject]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[has_subject](
	[class_id] [bigint] NOT NULL,
	[subject_id] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[isheldon]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[isheldon](
	[class_id] [bigint] NOT NULL,
	[weekday_id] [bigint] NOT NULL,
	[slot_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[class_id] ASC,
	[slot_id] ASC,
	[weekday_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[province]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[province](
	[province_id] [bigint] IDENTITY(1,1) NOT NULL,
	[province_name] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[province_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[qualifications]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[qualifications](
	[qualification] [varchar](255) NOT NULL,
	[tutor_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[qualification] ASC,
	[tutor_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[staff]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[staff](
	[date_of_birth] [datetime2](7) NULL,
	[national_id] [varchar](255) NULL,
	[place_of_origin] [varchar](255) NULL,
	[profile_photo] [varbinary](max) NULL,
	[staff_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[staff_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[student]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[student](
	[stu_grade] [int] NULL,
	[stu_school] [varchar](255) NULL,
	[stu_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[stu_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[subject]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[subject](
	[subject_id] [bigint] IDENTITY(1,1) NOT NULL,
	[subject_name] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[subject_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ta_want_subject]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ta_want_subject](
	[tutor_apply_id] [bigint] NOT NULL,
	[subject_id] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ta_want_type]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ta_want_type](
	[tutor_apply_id] [bigint] NOT NULL,
	[class_type_id] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[teaching_application]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[teaching_application](
	[tea_id] [bigint] IDENTITY(1,1) NOT NULL,
	[application_status] [varchar](255) NULL,
	[date_of_creation] [datetime2](7) NULL,
	[class_id] [bigint] NOT NULL,
	[tutor_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[tea_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[teaching_style]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[teaching_style](
	[teaching_style_id] [bigint] IDENTITY(1,1) NOT NULL,
	[teaching_style_name] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[teaching_style_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[timeslot]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[timeslot](
	[slot_id] [bigint] IDENTITY(1,1) NOT NULL,
	[end_time] [datetime2](7) NULL,
	[start_time] [datetime2](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[slot_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tutor]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tutor](
	[bio] [varchar](255) NULL,
	[date_joined] [datetime2](7) NULL,
	[inviting_code] [varchar](255) NULL,
	[n_of_invitations] [int] NULL,
	[rate] [int] NULL,
	[tutor_id] [bigint] NOT NULL,
	[invited_code] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[tutor_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UK_g5accvpotj6irddk8dn58ef47] UNIQUE NONCLUSTERED 
(
	[inviting_code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tutor_application]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tutor_application](
	[ta_id] [bigint] IDENTITY(1,1) NOT NULL,
	[requirement] [varchar](255) NULL,
	[ta_status] [varchar](255) NULL,
	[addr_id] [bigint] NOT NULL,
	[student_id] [bigint] NOT NULL,
	[teaching_style_id] [bigint] NOT NULL,
	[tutor_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[ta_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tutor_review]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tutor_review](
	[tutor_review_id] [bigint] IDENTITY(1,1) NOT NULL,
	[comment] [varchar](255) NULL,
	[rate] [int] NULL,
	[time_stamp] [datetime2](7) NULL,
	[class_id] [bigint] NOT NULL,
	[student_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[tutor_review_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usercontact]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usercontact](
	[contact_email] [varchar](255) NOT NULL,
	[contact_phone_number] [varchar](255) NOT NULL,
	[social_media_link] [varchar](255) NOT NULL,
	[user_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[contact_email] ASC,
	[contact_phone_number] ASC,
	[social_media_link] ASC,
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[user_id] [bigint] IDENTITY(1,1) NOT NULL,
	[fullname] [varchar](255) NULL,
	[password] [varchar](255) NOT NULL,
	[phone_number] [varchar](255) NOT NULL,
	[user_sex] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UK_9q63snka3mdh91as4io72espi] UNIQUE NONCLUSTERED 
(
	[phone_number] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[voucher]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[voucher](
	[vou_id] [bigint] IDENTITY(1,1) NOT NULL,
	[vou_discount] [decimal](18, 2) NULL,
	[vou_status] [varchar](255) NULL,
	[tutor_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[vou_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[want_teaching_style]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[want_teaching_style](
	[consultation_id] [bigint] NOT NULL,
	[tea_style_id] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ward]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ward](
	[ward_id] [bigint] NOT NULL,
	[ward_name] [varchar](255) NULL,
	[district_city_id] [bigint] NOT NULL,
	[province_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[district_city_id] ASC,
	[province_id] ASC,
	[ward_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[weekday]    Script Date: 11/11/2024 11:27:50 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[weekday](
	[weekday_id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[weekday_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[address]  WITH CHECK ADD  CONSTRAINT [FK6i66ijb8twgcqtetl8eeeed6v] FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([user_id])
GO
ALTER TABLE [dbo].[address] CHECK CONSTRAINT [FK6i66ijb8twgcqtetl8eeeed6v]
GO
ALTER TABLE [dbo].[address]  WITH CHECK ADD  CONSTRAINT [FK8dcilp3ck0yr1t3xj5pjjlegh] FOREIGN KEY([district_city_id], [province_id], [ward_id])
REFERENCES [dbo].[ward] ([district_city_id], [province_id], [ward_id])
GO
ALTER TABLE [dbo].[address] CHECK CONSTRAINT [FK8dcilp3ck0yr1t3xj5pjjlegh]
GO
ALTER TABLE [dbo].[administrator]  WITH CHECK ADD  CONSTRAINT [FKacuqf1ft0tfly1qywmstsm7k7] FOREIGN KEY([admin_id])
REFERENCES [dbo].[staff] ([staff_id])
GO
ALTER TABLE [dbo].[administrator] CHECK CONSTRAINT [FKacuqf1ft0tfly1qywmstsm7k7]
GO
ALTER TABLE [dbo].[belong_to]  WITH CHECK ADD  CONSTRAINT [FKcm6ah4ct4ne63irtlm1j2udwk] FOREIGN KEY([class_id])
REFERENCES [dbo].[class] ([class_id])
GO
ALTER TABLE [dbo].[belong_to] CHECK CONSTRAINT [FKcm6ah4ct4ne63irtlm1j2udwk]
GO
ALTER TABLE [dbo].[belong_to]  WITH CHECK ADD  CONSTRAINT [FKsf48ynifqguinlglff5tw96hg] FOREIGN KEY([tutor_id])
REFERENCES [dbo].[tutor] ([tutor_id])
GO
ALTER TABLE [dbo].[belong_to] CHECK CONSTRAINT [FKsf48ynifqguinlglff5tw96hg]
GO
ALTER TABLE [dbo].[bill]  WITH CHECK ADD  CONSTRAINT [FKh9jg27pyo4mw8noxjw8bwx9jv] FOREIGN KEY([admin_id])
REFERENCES [dbo].[administrator] ([admin_id])
GO
ALTER TABLE [dbo].[bill] CHECK CONSTRAINT [FKh9jg27pyo4mw8noxjw8bwx9jv]
GO
ALTER TABLE [dbo].[bill]  WITH CHECK ADD  CONSTRAINT [FKoefcs2e34wufxe18w2yiay4wp] FOREIGN KEY([vou_id])
REFERENCES [dbo].[voucher] ([vou_id])
GO
ALTER TABLE [dbo].[bill] CHECK CONSTRAINT [FKoefcs2e34wufxe18w2yiay4wp]
GO
ALTER TABLE [dbo].[can_teach_at]  WITH CHECK ADD  CONSTRAINT [FK1qr74e3faeguluvpemc7le4g3] FOREIGN KEY([tutor_id])
REFERENCES [dbo].[tutor] ([tutor_id])
GO
ALTER TABLE [dbo].[can_teach_at] CHECK CONSTRAINT [FK1qr74e3faeguluvpemc7le4g3]
GO
ALTER TABLE [dbo].[can_teach_at]  WITH CHECK ADD  CONSTRAINT [FKhc8l5bd7gedi3m5jg9vx5io0j] FOREIGN KEY([district_city_id], [province_id])
REFERENCES [dbo].[district_city] ([district_city_id], [province_id])
GO
ALTER TABLE [dbo].[can_teach_at] CHECK CONSTRAINT [FKhc8l5bd7gedi3m5jg9vx5io0j]
GO
ALTER TABLE [dbo].[can_teach_style]  WITH CHECK ADD  CONSTRAINT [FKc2phd4xb0yfce6pr25q3y6vmg] FOREIGN KEY([tutor_id])
REFERENCES [dbo].[tutor] ([tutor_id])
GO
ALTER TABLE [dbo].[can_teach_style] CHECK CONSTRAINT [FKc2phd4xb0yfce6pr25q3y6vmg]
GO
ALTER TABLE [dbo].[can_teach_style]  WITH CHECK ADD  CONSTRAINT [FKr6wm0ig9vmmwk9qc8gfr5w90s] FOREIGN KEY([style_id])
REFERENCES [dbo].[teaching_style] ([teaching_style_id])
GO
ALTER TABLE [dbo].[can_teach_style] CHECK CONSTRAINT [FKr6wm0ig9vmmwk9qc8gfr5w90s]
GO
ALTER TABLE [dbo].[can_teach_subject]  WITH CHECK ADD  CONSTRAINT [FK6bcoteucwwk88i1a4lcdp7sw8] FOREIGN KEY([tutor_id])
REFERENCES [dbo].[tutor] ([tutor_id])
GO
ALTER TABLE [dbo].[can_teach_subject] CHECK CONSTRAINT [FK6bcoteucwwk88i1a4lcdp7sw8]
GO
ALTER TABLE [dbo].[can_teach_subject]  WITH CHECK ADD  CONSTRAINT [FKq14xl061xrs9cl7sqlmdh4k0i] FOREIGN KEY([subject_id])
REFERENCES [dbo].[subject] ([subject_id])
GO
ALTER TABLE [dbo].[can_teach_subject] CHECK CONSTRAINT [FKq14xl061xrs9cl7sqlmdh4k0i]
GO
ALTER TABLE [dbo].[can_teach_type]  WITH CHECK ADD  CONSTRAINT [FK3e64e72bxhfkfto9fcdjhyqy1] FOREIGN KEY([tutor_id])
REFERENCES [dbo].[tutor] ([tutor_id])
GO
ALTER TABLE [dbo].[can_teach_type] CHECK CONSTRAINT [FK3e64e72bxhfkfto9fcdjhyqy1]
GO
ALTER TABLE [dbo].[can_teach_type]  WITH CHECK ADD  CONSTRAINT [FKig918n4s1aok8prrl091ych7n] FOREIGN KEY([class_type_id])
REFERENCES [dbo].[class_type] ([class_type_id])
GO
ALTER TABLE [dbo].[can_teach_type] CHECK CONSTRAINT [FKig918n4s1aok8prrl091ych7n]
GO
ALTER TABLE [dbo].[certificate]  WITH CHECK ADD  CONSTRAINT [FKifcrm5368hy811q1bnn005jxx] FOREIGN KEY([certificate_type_id])
REFERENCES [dbo].[certificate_type] ([certificate_type_id])
GO
ALTER TABLE [dbo].[certificate] CHECK CONSTRAINT [FKifcrm5368hy811q1bnn005jxx]
GO
ALTER TABLE [dbo].[certificate]  WITH CHECK ADD  CONSTRAINT [FKrgngrw5rp4fmvfnnl9y6ghr9v] FOREIGN KEY([tutor_id])
REFERENCES [dbo].[tutor] ([tutor_id])
GO
ALTER TABLE [dbo].[certificate] CHECK CONSTRAINT [FKrgngrw5rp4fmvfnnl9y6ghr9v]
GO
ALTER TABLE [dbo].[class]  WITH CHECK ADD  CONSTRAINT [FK9rp4l5g6ur82gvaoyn756x3gs] FOREIGN KEY([teaching_style_id])
REFERENCES [dbo].[teaching_style] ([teaching_style_id])
GO
ALTER TABLE [dbo].[class] CHECK CONSTRAINT [FK9rp4l5g6ur82gvaoyn756x3gs]
GO
ALTER TABLE [dbo].[class]  WITH CHECK ADD  CONSTRAINT [FKg87lmtxf7966u4njwvtrfj2c0] FOREIGN KEY([student_id])
REFERENCES [dbo].[student] ([stu_id])
GO
ALTER TABLE [dbo].[class] CHECK CONSTRAINT [FKg87lmtxf7966u4njwvtrfj2c0]
GO
ALTER TABLE [dbo].[class]  WITH CHECK ADD  CONSTRAINT [FKridltcnrqtlt0smu6cy4m01bl] FOREIGN KEY([addr_id])
REFERENCES [dbo].[address] ([addr_id])
GO
ALTER TABLE [dbo].[class] CHECK CONSTRAINT [FKridltcnrqtlt0smu6cy4m01bl]
GO
ALTER TABLE [dbo].[class]  WITH CHECK ADD  CONSTRAINT [FKsjxn0xj2p8f1oaios3secjjep] FOREIGN KEY([tutor_id])
REFERENCES [dbo].[tutor] ([tutor_id])
GO
ALTER TABLE [dbo].[class] CHECK CONSTRAINT [FKsjxn0xj2p8f1oaios3secjjep]
GO
ALTER TABLE [dbo].[consultation_req]  WITH CHECK ADD  CONSTRAINT [FK5h41j02ipe9txheh7rrs7hfmj] FOREIGN KEY([student_id])
REFERENCES [dbo].[student] ([stu_id])
GO
ALTER TABLE [dbo].[consultation_req] CHECK CONSTRAINT [FK5h41j02ipe9txheh7rrs7hfmj]
GO
ALTER TABLE [dbo].[consultation_req]  WITH CHECK ADD  CONSTRAINT [FKlukrgcdg066f6f1efnn8ilr33] FOREIGN KEY([addr_id])
REFERENCES [dbo].[address] ([addr_id])
GO
ALTER TABLE [dbo].[consultation_req] CHECK CONSTRAINT [FKlukrgcdg066f6f1efnn8ilr33]
GO
ALTER TABLE [dbo].[cr_want_subject]  WITH CHECK ADD  CONSTRAINT [FK4i9rgrd26ce2mm2n96i46p04o] FOREIGN KEY([subject_id])
REFERENCES [dbo].[subject] ([subject_id])
GO
ALTER TABLE [dbo].[cr_want_subject] CHECK CONSTRAINT [FK4i9rgrd26ce2mm2n96i46p04o]
GO
ALTER TABLE [dbo].[cr_want_subject]  WITH CHECK ADD  CONSTRAINT [FKmc6mvmcbusb7cg5h63np6lafm] FOREIGN KEY([consultation_id])
REFERENCES [dbo].[consultation_req] ([cq_id])
GO
ALTER TABLE [dbo].[cr_want_subject] CHECK CONSTRAINT [FKmc6mvmcbusb7cg5h63np6lafm]
GO
ALTER TABLE [dbo].[cr_want_type]  WITH CHECK ADD  CONSTRAINT [FKjc9iv1ckct96hg70qtmgi8jkl] FOREIGN KEY([consultation_id])
REFERENCES [dbo].[consultation_req] ([cq_id])
GO
ALTER TABLE [dbo].[cr_want_type] CHECK CONSTRAINT [FKjc9iv1ckct96hg70qtmgi8jkl]
GO
ALTER TABLE [dbo].[cr_want_type]  WITH CHECK ADD  CONSTRAINT [FKtltlrrjldfdkfsyujuq0lq9f2] FOREIGN KEY([class_type_id])
REFERENCES [dbo].[class_type] ([class_type_id])
GO
ALTER TABLE [dbo].[cr_want_type] CHECK CONSTRAINT [FKtltlrrjldfdkfsyujuq0lq9f2]
GO
ALTER TABLE [dbo].[degree]  WITH CHECK ADD  CONSTRAINT [FKryfhbsm7q2vf1s1kq3vug29m5] FOREIGN KEY([tutor_id])
REFERENCES [dbo].[tutor] ([tutor_id])
GO
ALTER TABLE [dbo].[degree] CHECK CONSTRAINT [FKryfhbsm7q2vf1s1kq3vug29m5]
GO
ALTER TABLE [dbo].[degree]  WITH CHECK ADD  CONSTRAINT [FKt5xpwop91cdcwb8e8prgmu9ra] FOREIGN KEY([granted_institution_id])
REFERENCES [dbo].[degree_institution] ([edi_code])
GO
ALTER TABLE [dbo].[degree] CHECK CONSTRAINT [FKt5xpwop91cdcwb8e8prgmu9ra]
GO
ALTER TABLE [dbo].[district_city]  WITH CHECK ADD  CONSTRAINT [FKnmdxji8o7gr8q7ax91o7ya1as] FOREIGN KEY([province_id])
REFERENCES [dbo].[province] ([province_id])
GO
ALTER TABLE [dbo].[district_city] CHECK CONSTRAINT [FKnmdxji8o7gr8q7ax91o7ya1as]
GO
ALTER TABLE [dbo].[graduated_from]  WITH CHECK ADD  CONSTRAINT [FK1lxje3aotytqmq4utkhp8sdhc] FOREIGN KEY([tutor_id])
REFERENCES [dbo].[tutor] ([tutor_id])
GO
ALTER TABLE [dbo].[graduated_from] CHECK CONSTRAINT [FK1lxje3aotytqmq4utkhp8sdhc]
GO
ALTER TABLE [dbo].[graduated_from]  WITH CHECK ADD  CONSTRAINT [FKhxnla6bq8wy3r2ulfgesh8rg] FOREIGN KEY([institution_id])
REFERENCES [dbo].[degree_institution] ([edi_code])
GO
ALTER TABLE [dbo].[graduated_from] CHECK CONSTRAINT [FKhxnla6bq8wy3r2ulfgesh8rg]
GO
ALTER TABLE [dbo].[has_class_type]  WITH CHECK ADD  CONSTRAINT [FKc0o4fww4apmk8998d5wbcnowf] FOREIGN KEY([class_type_id])
REFERENCES [dbo].[class_type] ([class_type_id])
GO
ALTER TABLE [dbo].[has_class_type] CHECK CONSTRAINT [FKc0o4fww4apmk8998d5wbcnowf]
GO
ALTER TABLE [dbo].[has_class_type]  WITH CHECK ADD  CONSTRAINT [FKc7f1lnyrqsrsfuhgvnugm6dln] FOREIGN KEY([class_id])
REFERENCES [dbo].[class] ([class_id])
GO
ALTER TABLE [dbo].[has_class_type] CHECK CONSTRAINT [FKc7f1lnyrqsrsfuhgvnugm6dln]
GO
ALTER TABLE [dbo].[has_subject]  WITH CHECK ADD  CONSTRAINT [FK1objo9cb5gmximil10pnm0n6l] FOREIGN KEY([subject_id])
REFERENCES [dbo].[subject] ([subject_id])
GO
ALTER TABLE [dbo].[has_subject] CHECK CONSTRAINT [FK1objo9cb5gmximil10pnm0n6l]
GO
ALTER TABLE [dbo].[has_subject]  WITH CHECK ADD  CONSTRAINT [FKmw0ctgljfd2dgvksjkxandyxi] FOREIGN KEY([class_id])
REFERENCES [dbo].[class] ([class_id])
GO
ALTER TABLE [dbo].[has_subject] CHECK CONSTRAINT [FKmw0ctgljfd2dgvksjkxandyxi]
GO
ALTER TABLE [dbo].[isheldon]  WITH CHECK ADD  CONSTRAINT [FK108uwrguervpcb7u4efkeeuq8] FOREIGN KEY([class_id])
REFERENCES [dbo].[class] ([class_id])
GO
ALTER TABLE [dbo].[isheldon] CHECK CONSTRAINT [FK108uwrguervpcb7u4efkeeuq8]
GO
ALTER TABLE [dbo].[isheldon]  WITH CHECK ADD  CONSTRAINT [FK2fk55oivf98qhsicqui3alt7] FOREIGN KEY([slot_id])
REFERENCES [dbo].[timeslot] ([slot_id])
GO
ALTER TABLE [dbo].[isheldon] CHECK CONSTRAINT [FK2fk55oivf98qhsicqui3alt7]
GO
ALTER TABLE [dbo].[isheldon]  WITH CHECK ADD  CONSTRAINT [FKif72av7jucv73f9ibkr06uox0] FOREIGN KEY([weekday_id])
REFERENCES [dbo].[weekday] ([weekday_id])
GO
ALTER TABLE [dbo].[isheldon] CHECK CONSTRAINT [FKif72av7jucv73f9ibkr06uox0]
GO
ALTER TABLE [dbo].[qualifications]  WITH CHECK ADD  CONSTRAINT [FKk2tcm4ke292hb7abt38te0ncs] FOREIGN KEY([tutor_id])
REFERENCES [dbo].[tutor] ([tutor_id])
GO
ALTER TABLE [dbo].[qualifications] CHECK CONSTRAINT [FKk2tcm4ke292hb7abt38te0ncs]
GO
ALTER TABLE [dbo].[staff]  WITH CHECK ADD  CONSTRAINT [FKdb7iapv23chqgotel5wy2s5y6] FOREIGN KEY([staff_id])
REFERENCES [dbo].[users] ([user_id])
GO
ALTER TABLE [dbo].[staff] CHECK CONSTRAINT [FKdb7iapv23chqgotel5wy2s5y6]
GO
ALTER TABLE [dbo].[student]  WITH CHECK ADD  CONSTRAINT [FKg7bmoq2rcqn7hb518ecjrrofk] FOREIGN KEY([stu_id])
REFERENCES [dbo].[users] ([user_id])
GO
ALTER TABLE [dbo].[student] CHECK CONSTRAINT [FKg7bmoq2rcqn7hb518ecjrrofk]
GO
ALTER TABLE [dbo].[ta_want_subject]  WITH CHECK ADD  CONSTRAINT [FK32qyi4pc1uyr6stf9sfkxip6t] FOREIGN KEY([subject_id])
REFERENCES [dbo].[subject] ([subject_id])
GO
ALTER TABLE [dbo].[ta_want_subject] CHECK CONSTRAINT [FK32qyi4pc1uyr6stf9sfkxip6t]
GO
ALTER TABLE [dbo].[ta_want_subject]  WITH CHECK ADD  CONSTRAINT [FK4y5s4a2g7o1poux1nmetr33u1] FOREIGN KEY([tutor_apply_id])
REFERENCES [dbo].[tutor_application] ([ta_id])
GO
ALTER TABLE [dbo].[ta_want_subject] CHECK CONSTRAINT [FK4y5s4a2g7o1poux1nmetr33u1]
GO
ALTER TABLE [dbo].[ta_want_type]  WITH CHECK ADD  CONSTRAINT [FKh5avg94ju23vgt5l0qnmpofaw] FOREIGN KEY([class_type_id])
REFERENCES [dbo].[class_type] ([class_type_id])
GO
ALTER TABLE [dbo].[ta_want_type] CHECK CONSTRAINT [FKh5avg94ju23vgt5l0qnmpofaw]
GO
ALTER TABLE [dbo].[ta_want_type]  WITH CHECK ADD  CONSTRAINT [FKqueawcuhj4x4ihvtl7rjvfjak] FOREIGN KEY([tutor_apply_id])
REFERENCES [dbo].[tutor_application] ([ta_id])
GO
ALTER TABLE [dbo].[ta_want_type] CHECK CONSTRAINT [FKqueawcuhj4x4ihvtl7rjvfjak]
GO
ALTER TABLE [dbo].[teaching_application]  WITH CHECK ADD  CONSTRAINT [FKk6umk3f8cc5pmgicpwkw9a2os] FOREIGN KEY([tutor_id])
REFERENCES [dbo].[tutor] ([tutor_id])
GO
ALTER TABLE [dbo].[teaching_application] CHECK CONSTRAINT [FKk6umk3f8cc5pmgicpwkw9a2os]
GO
ALTER TABLE [dbo].[teaching_application]  WITH CHECK ADD  CONSTRAINT [FKmmlf4kk51ea4ax7yyc7py5pie] FOREIGN KEY([class_id])
REFERENCES [dbo].[class] ([class_id])
GO
ALTER TABLE [dbo].[teaching_application] CHECK CONSTRAINT [FKmmlf4kk51ea4ax7yyc7py5pie]
GO
ALTER TABLE [dbo].[tutor]  WITH CHECK ADD  CONSTRAINT [FK36na5bhf5o5rf3h0osgwxci6f] FOREIGN KEY([tutor_id])
REFERENCES [dbo].[staff] ([staff_id])
GO
ALTER TABLE [dbo].[tutor] CHECK CONSTRAINT [FK36na5bhf5o5rf3h0osgwxci6f]
GO
ALTER TABLE [dbo].[tutor]  WITH CHECK ADD  CONSTRAINT [FKn6esf2ou7po2yjmvkfvwk9swp] FOREIGN KEY([invited_code])
REFERENCES [dbo].[tutor] ([tutor_id])
GO
ALTER TABLE [dbo].[tutor] CHECK CONSTRAINT [FKn6esf2ou7po2yjmvkfvwk9swp]
GO
ALTER TABLE [dbo].[tutor_application]  WITH CHECK ADD  CONSTRAINT [FK82b82kk6r5c3vi2ce3sksldg3] FOREIGN KEY([addr_id])
REFERENCES [dbo].[address] ([addr_id])
GO
ALTER TABLE [dbo].[tutor_application] CHECK CONSTRAINT [FK82b82kk6r5c3vi2ce3sksldg3]
GO
ALTER TABLE [dbo].[tutor_application]  WITH CHECK ADD  CONSTRAINT [FKht5y7uy8wf0c8973b5qso14py] FOREIGN KEY([tutor_id])
REFERENCES [dbo].[tutor] ([tutor_id])
GO
ALTER TABLE [dbo].[tutor_application] CHECK CONSTRAINT [FKht5y7uy8wf0c8973b5qso14py]
GO
ALTER TABLE [dbo].[tutor_application]  WITH CHECK ADD  CONSTRAINT [FKol6ktbsmnlbyxhgssywurwacq] FOREIGN KEY([teaching_style_id])
REFERENCES [dbo].[teaching_style] ([teaching_style_id])
GO
ALTER TABLE [dbo].[tutor_application] CHECK CONSTRAINT [FKol6ktbsmnlbyxhgssywurwacq]
GO
ALTER TABLE [dbo].[tutor_application]  WITH CHECK ADD  CONSTRAINT [FKr6wontwagl1nm0y1e38ksl636] FOREIGN KEY([student_id])
REFERENCES [dbo].[student] ([stu_id])
GO
ALTER TABLE [dbo].[tutor_application] CHECK CONSTRAINT [FKr6wontwagl1nm0y1e38ksl636]
GO
ALTER TABLE [dbo].[tutor_review]  WITH CHECK ADD  CONSTRAINT [FKbxewdmj7a0ey7rn3nmh4bi0uo] FOREIGN KEY([class_id])
REFERENCES [dbo].[class] ([class_id])
GO
ALTER TABLE [dbo].[tutor_review] CHECK CONSTRAINT [FKbxewdmj7a0ey7rn3nmh4bi0uo]
GO
ALTER TABLE [dbo].[tutor_review]  WITH CHECK ADD  CONSTRAINT [FKn1grl881osn7u0qtqi9epb4t3] FOREIGN KEY([student_id])
REFERENCES [dbo].[student] ([stu_id])
GO
ALTER TABLE [dbo].[tutor_review] CHECK CONSTRAINT [FKn1grl881osn7u0qtqi9epb4t3]
GO
ALTER TABLE [dbo].[usercontact]  WITH CHECK ADD  CONSTRAINT [FKddu27uy0rw5j7e3oso0oaixpb] FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([user_id])
GO
ALTER TABLE [dbo].[usercontact] CHECK CONSTRAINT [FKddu27uy0rw5j7e3oso0oaixpb]
GO
ALTER TABLE [dbo].[voucher]  WITH CHECK ADD  CONSTRAINT [FKcnmevrlfntsyenhdm7pw4nc51] FOREIGN KEY([tutor_id])
REFERENCES [dbo].[tutor] ([tutor_id])
GO
ALTER TABLE [dbo].[voucher] CHECK CONSTRAINT [FKcnmevrlfntsyenhdm7pw4nc51]
GO
ALTER TABLE [dbo].[want_teaching_style]  WITH CHECK ADD  CONSTRAINT [FK26fesjsocc01dbgx181y3t2od] FOREIGN KEY([consultation_id])
REFERENCES [dbo].[consultation_req] ([cq_id])
GO
ALTER TABLE [dbo].[want_teaching_style] CHECK CONSTRAINT [FK26fesjsocc01dbgx181y3t2od]
GO
ALTER TABLE [dbo].[want_teaching_style]  WITH CHECK ADD  CONSTRAINT [FKbx2fiopchptn8sutjqcb1vilx] FOREIGN KEY([tea_style_id])
REFERENCES [dbo].[teaching_style] ([teaching_style_id])
GO
ALTER TABLE [dbo].[want_teaching_style] CHECK CONSTRAINT [FKbx2fiopchptn8sutjqcb1vilx]
GO
ALTER TABLE [dbo].[ward]  WITH CHECK ADD  CONSTRAINT [FK75ye4g45h42tv2vmvrbs61pf4] FOREIGN KEY([district_city_id], [province_id])
REFERENCES [dbo].[district_city] ([district_city_id], [province_id])
GO
ALTER TABLE [dbo].[ward] CHECK CONSTRAINT [FK75ye4g45h42tv2vmvrbs61pf4]
GO