package net.lab1024.sa.common.module.support.helpdoc.domain.form;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotNull;

/**
 * 更新 帮助文档
 *
 * @Author 曾
 * @Date 2023-05-21 22:34:00 
 * @Wechat 
 * @Email 739224682@qq.com 
 * @Copyright 
 */
@Data
public class HelpDocUpdateForm extends HelpDocAddForm {

    @ApiModelProperty("id")
    @NotNull(message = "通知id不能为空")
    private Long helpDocId;

}
