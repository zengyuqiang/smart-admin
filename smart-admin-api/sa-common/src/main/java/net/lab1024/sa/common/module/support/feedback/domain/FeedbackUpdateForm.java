package net.lab1024.sa.common.module.support.feedback.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 意见反馈 添加表单
 *
 * @Author 1024创新实验室: 开云
 * @Date 2022-08-11 20:48:09
 * @Wechat zhuoda1024
 * @Email lab1024@163.com
 * @Copyright 1024创新实验室 （ https://1024lab.net ）
 */
@Data
public class FeedbackUpdateForm {

    @ApiModelProperty("反馈内容的ID")
    private Long feedbackId;

    @ApiModelProperty("反馈是否已经解决")
    private Boolean solveFlag;

}
