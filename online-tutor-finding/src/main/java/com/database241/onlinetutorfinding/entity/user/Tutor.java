package com.database241.onlinetutorfinding.entity.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "tutor")
@PrimaryKeyJoinColumn(name = "tutor_id")
public class Tutor extends Staff
{
    @Column(name = "bio")
    private String bio;

    @Column(name = "date_joined")
    private LocalDateTime dateJoined;

    @Column(name = "inviting_code")
    private String invitingCode;

    @Column(name = "n_of_invitations")
    private Integer nOfInvitations;

    @Column(name = "rate")
    private Integer rate;

    /*
        Referenced to the Tutor, that he/she
        has invited me
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invited_code")
    private Tutor invitedCode;
}