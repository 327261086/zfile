package im.zhaojun.zfile.home.service.impl;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import im.zhaojun.zfile.admin.model.param.AliyunParam;
import im.zhaojun.zfile.home.model.enums.StorageTypeEnum;
import im.zhaojun.zfile.home.service.base.AbstractS3BaseFileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

/**
 * @author zhaojun
 */
@Service
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Slf4j
public class AliyunServiceImpl extends AbstractS3BaseFileService<AliyunParam> {

    @Override
    public void init() {
        BasicAWSCredentials credentials = new BasicAWSCredentials(param.getAccessKey(), param.getSecretKey());

        s3Client = AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(param.getEndPoint(), "oss")).build();

        setUploadCors();
    }

    @Override
    public StorageTypeEnum getStorageTypeEnum() {
        return StorageTypeEnum.ALIYUN;
    }

}