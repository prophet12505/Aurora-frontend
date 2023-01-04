package aurora.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;


public class MailSender {

    private static final String verifyEmailBodyTemplate="<html><body><h1>Hello, this is an email from Aurora！</h1><p>click here to verify your email:</p><p>%s</p></body></html>";
    private static final String verifyEmailTitle="Aurora : please verify your email";
    public void sendVerificationEmail(String to,  String link){
        JavaMailSenderImpl mailSender=new JavaMailSenderImpl();
//        set up mail configuration
        mailSender.setProtocol("smtps");
        mailSender.setDefaultEncoding("utf-8");
        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(465);
        mailSender.setUsername("oliverrodger12505@gmail.com");
//        mailSender.setPassword("rfjwzyyqsmgdaqzr");
        //app password
        mailSender.setPassword("dwaesjzfycgsvwfo");
        //dwaesjzfycgsvwfo
//        set up properties
        Properties javaMailProperties = new Properties();
        javaMailProperties.put("mail.smtps.auth", true);
        javaMailProperties.put("mail.smtps.starttls.enable", true);
        mailSender.setJavaMailProperties(javaMailProperties);
//        set up content
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(verifyEmailTitle);
        message.setText(String.format(verifyEmailBodyTemplate,link));


        mailSender.send(message);
    }
}
